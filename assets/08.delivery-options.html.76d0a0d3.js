import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{o as r,c as u,a as n,b as t,w as a,d as s,r as c}from"./app.d477afc0.js";const i={},k=n("h3",{id:"_8-delivery-options",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_8-delivery-options","aria-hidden":"true"},"#"),s(" 8. Delivery options")],-1),d=n("h4",{id:"_8-a",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_8-a","aria-hidden":"true"},"#"),s(" 8.A Get delivery options")],-1),y=s("This endpoint has a rate limit. For more information, see "),_=s("rate limiting"),m=s("."),h=n("h5",{id:"_8-a-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_8-a-1","aria-hidden":"true"},"#"),s(" 8.A.1 Overview")],-1),g=n("p",null,[n("strong",null,"Defaults"),n("br"),s(" Get the delivery options for a given location and carrier. If none of the optional parameters are specified then the following default will be used: If a request is made for the delivery options between Friday "),n("strong",null,"after"),s(" the default cutoff_time (15h30) and Monday "),n("strong",null,"before"),s(" the default cutoff_time (15h30) then Tuesday will be shown as the next possible delivery date.")],-1),f=n("strong",null,"Objects",-1),b=n("br",null,null,-1),v=s(" Upon success two "),z=s("array"),E=s("s are returned; one for "),x=s("DeliveryOptions"),w=s(" and one for "),A=s("PickupOptions"),T=s(" objects is returned. This object contains delivery date, time and pricing. Upon error an Error object is returned."),R=s("To show delivery options to customers, you can use our javascript "),P=s("code"),j=s(". Use our "),N=s("sandbox"),D=s(" for an example and easier integration."),q=n("h5",{id:"_8-a-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_8-a-2","aria-hidden":"true"},"#"),s(" 8.A.2 Reference")],-1),L=n("tr",null,[n("td",{rowspan:"2"},[n("strong",null,"URI")]),n("td",null,"https://api.myparcel.nl/delivery_options"),n("td")],-1),M=n("tr",null,[n("td",null,"https://api.myparcel.nl/pickup_locations"),n("td")],-1),S=n("tr",null,[n("td",null,"Methods"),n("td",null,"GET"),n("td")],-1),H=n("tr",null,[n("td",null,"Rate Limit"),n("td",null,"30 requests in 5 minutes"),n("td")],-1),U=n("tr",null,[n("td",null,"URI parameters"),n("td",null,"\u2013"),n("td")],-1),B=n("td",{rowspan:"18"},"Query parameters",-1),G=n("td",null,"cc",-1),O=s("country_code"),C=n("td",null,"postal_code",-1),J=s("string"),K=n("td",null,"number",-1),I=s("string"),F=n("td",null,"city",-1),V=s("string"),Q=n("td",null,"street",-1),W=s("string"),Y=n("td",null,"platform",-1),Z=s("platform"),X=n("td",null,"carrier",-1),$=s("carrier"),nn=n("td",null,"delivery_time",-1),sn=s("time"),tn=n("td",null,"delivery_date",-1),an=s("date"),on=n("td",null,"cutoff_time",-1),en=s("time"),pn=n("td",null,"dropoff_days",-1),cn=s("weekday_digit"),ln=n("td",null,"monday_delivery",-1),rn=s("boolean"),un=n("td",null,"dropoff_delay",-1),kn=s("integer"),dn=n("td",null,"deliverydays_window",-1),yn=s("integer"),_n=n("td",null,"exclude_delivery_type",-1),mn=s("delivery_type"),hn=n("td",null,"exclude_parcel_lockers",-1),gn=s("boolean"),fn=n("td",null,"latitude",-1),bn=s("coordinates"),vn=n("td",null,"longitude",-1),zn=s("coordinates"),En=n("tr",null,[n("td",null,"Request body"),n("td",null,"None."),n("td")],-1),xn=n("tr",null,[n("td",null,"Response"),n("td",null,"HTTP/1.1 200 OK"),n("td")],-1),wn=n("tr",null,[n("td",null,"Content-Type:"),n("td",null,"application/json;version=2.0 charset=utf-8"),n("td")],-1),An=n("tr",null,[n("td",null,"Response body"),n("td",null,"array of DeliveryOptions or array of PickupOptions objects"),n("td")],-1),Tn=n("tr",null,[n("td",null,"Error response"),n("td",null,"HTTP/1.1 5xx < MESSAGE >"),n("td")],-1),Rn=n("tr",null,[n("td",null,"Error response body"),n("td",null,"None."),n("td")],-1),Pn=n("tr",null,[n("td",null,"Error response"),n("td",null,"HTTP/1.1 503 < MESSAGE >"),n("td")],-1),jn=n("tr",null,[n("td",null,"Error response body 503"),n("td",null,"Error"),n("td")],-1),Nn=n("tr",null,[n("td",null,"Error response body Example"),n("td",null,[n("code",null,' {"data": {"delivery": [],"pickup": [],"message": "No results"},"errors": [{"code": 9,"message": "Example","human": "Example"}]}')]),n("td")],-1),Dn=n("h5",{id:"_8-a-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_8-a-3","aria-hidden":"true"},"#"),s(" 8.A.3 Parameters")],-1),qn=n("strong",null,"cc",-1),Ln=n("br",null,null,-1),Mn=s(" Data type: "),Sn=s("country_code"),Hn=n("br",null,null,-1),Un=s(" Required: yes"),Bn=n("br",null,null,-1),Gn=s(" The country code for which to fetch the delivery options. This endpoint can only be used in the Netherlands or Belgium ( cc=NL or cc=BE )."),On=n("strong",null,"postal_code",-1),Cn=n("br",null,null,-1),Jn=s(" Data type: "),Kn=s("string"),In=n("br",null,null,-1),Fn=s(" Required: yes."),Vn=n("br",null,null,-1),Qn=s(" The postal code for which to fetch the delivery options."),Wn=n("strong",null,"number",-1),Yn=n("br",null,null,-1),Zn=s(" Data type: "),Xn=s("string"),$n=n("br",null,null,-1),ns=s(" Required: yes"),ss=n("br",null,null,-1),ts=s(" The street number for which to fetch the delivery options."),as=n("strong",null,"city",-1),os=n("br",null,null,-1),es=s(" Data type: "),ps=s("string"),cs=n("br",null,null,-1),ls=s(" Required: no"),rs=n("br",null,null,-1),us=s(" Only available for carriers bpost and DPD. This can be used to narrow the search results for locations outside NL."),is=n("strong",null,"street",-1),ks=n("br",null,null,-1),ds=s(" Data type: "),ys=s("string"),_s=n("br",null,null,-1),ms=s(" Required: no"),hs=n("br",null,null,-1),gs=s(" This can be used to narrow the search results for locations outside NL."),fs=n("strong",null,"platform",-1),bs=n("br",null,null,-1),vs=s(" Data type: "),zs=s("platform"),Es=n("br",null,null,-1),xs=s(" Required: no"),ws=n("br",null,null,-1),As=s(" The platform where you want the data from"),Ts=n("strong",null,"delivery_time",-1),Rs=n("br",null,null,-1),Ps=s(" Data type: "),js=s("time"),Ns=n("br",null,null,-1),Ds=s(" Required: no"),qs=n("br",null,null,-1),Ls=s(" The time on which a package has to be delivered."),Ms=n("br",null,null,-1),Ss=n("strong",null,"Note: This is only an indication of time the package will be delivered on the selected date.",-1),Hs=n("strong",null,"delivery_date",-1),Us=n("br",null,null,-1),Bs=s(" Data type: "),Gs=s("date"),Os=n("br",null,null,-1),Cs=s(" Required: no"),Js=n("br",null,null,-1),Ks=s(" The date on which the package has to be delivered."),Is=n("strong",null,"cutoff_time",-1),Fs=n("br",null,null,-1),Vs=s(" Data type: "),Qs=s("time"),Ws=n("br",null,null,-1),Ys=s(" Required: no"),Zs=n("br",null,null,-1),Xs=s(" This option allows the "),$s=n("strong",null,"Merchant",-1),nt=s(" to indicate the latest cut-off time before which a consumer order will still be picked, packed and dispatched on the same/first set dropoff day, taking into account the dropoff-delay. Default time is 15h30. For example, if cutoff time is 15h30, Monday is a delivery day and there's no delivery delay; all orders placed Monday before 15h30 will be dropped of at PostNL on that same Monday in time for the Monday collection."),st=n("strong",null,"dropoff_days",-1),tt=n("br",null,null,-1),at=s(" Data type: "),ot=s("weekday_digit"),et=n("br",null,null,-1),pt=s(" Required: no"),ct=n("br",null,null,-1),lt=s(" This options allows the "),rt=n("strong",null,"Merchant",-1),ut=s(" to set the days she normally goes to PostNL to hand in her parcels. By default Saturday and Sunday are excluded."),it=n("strong",null,"monday_delivery",-1),kt=n("br",null,null,-1),dt=s(" Data type: "),yt=s("boolean"),_t=n("br",null,null,-1),mt=s(" Required: no"),ht=n("br",null,null,-1),gt=s(" Monday delivery is only possible when the package is delivered before 15.00 on Saturday at the designated PostNL locations. Click "),ft=s("here"),bt=s(" for more information concerning Monday delivery and the locations."),vt=n("br",null,null,-1),zt=s("Note: To activate Monday delivery, value 6 must be given with "),Et=s("dropoff_days"),xt=s(" , value 1 must be given by "),wt=s("monday_delivery"),At=s(" . And on Saturday the "),Tt=s("cutoff_time"),Rt=s(" must be before 15:00 (14:30 recommended) so that Monday will be shown."),Pt=n("strong",null,"saturday_delivery",-1),jt=n("br",null,null,-1),Nt=s(" Data type: "),Dt=s("boolean"),qt=n("br",null,null,-1),Lt=s(" Required: no"),Mt=n("br",null,null,-1),St=s(" Saturday delivery is only possible when the package is delivered before 15.00 on Friday at the designated bpost locations."),Ht=n("br",null,null,-1),Ut=s("Note: To activate Saturday delivery, value 6 must be given with "),Bt=s("dropoff_days"),Gt=s(" , value 1 must be given by "),Ot=s("saturday_delivery"),Ct=s(" ."),Jt=n("strong",null,"dropoff_delay",-1),Kt=n("br",null,null,-1),It=s(" Data type: "),Ft=s("integer"),Vt=n("br",null,null,-1),Qt=s(" Required: no"),Wt=n("br",null,null,-1),Yt=s(" This options allows the "),Zt=n("strong",null,"Merchant",-1),Xt=s(" to set the number of days it takes her to pick, pack and hand in her parcels at PostNL when ordered before the cutoff time. By default this is 0 and max is 14."),$t=n("strong",null,"deliverydays_window",-1),na=n("br",null,null,-1),sa=s(" Data type: "),ta=s("integer"),aa=n("br",null,null,-1),oa=s(" Required: no"),ea=n("br",null,null,-1),pa=s(" This options allows the "),ca=n("strong",null,"Merchant",-1),la=s(" to set the number of days into the future for which she wants to show her consumers delivery options. For example, if set to 3 in her check-out, a consumer ordering on Monday will see possible delivery options for Tuesday, Wednesday and Thursday (provided there is no drop-off delay, it's before the cut-off time and she goes to PostNL on Mondays). Min is 1. and max. is 14."),ra=n("strong",null,"exclude_delivery_type",-1),ua=n("br",null,null,-1),ia=s(" Data type: "),ka=s("delivery_type"),da=n("br",null,null,-1),ya=s(" Required: no"),_a=n("br",null,null,-1),ma=s(" This options allows the Merchant to exclude delivery types from the available delivery options. You can specify multiple delivery types by semicolon separating them. The standard delivery name cannot be excluded."),ha=n("strong",null,"exclude_parcel_lockers",-1),ga=n("br",null,null,-1),fa=s(" Data type: "),ba=s("boolean"),va=n("br",null,null,-1),za=s(" Required: no"),Ea=n("br",null,null,-1),xa=s(" This option allows to filter out pickup locations that are parcel lockers."),wa=n("strong",null,"latitude",-1),Aa=n("br",null,null,-1),Ta=s(" Data type: "),Ra=s("coordinates"),Pa=n("br",null,null,-1),ja=s(" Required: no"),Na=n("br",null,null,-1),Da=s(" This provides the ability to display the postNL locations through the coordinates. If only latitude or longitude is passed as a parameter, it will be ignored and will simply use zip code for searching locations."),qa=n("strong",null,"longitude",-1),La=n("br",null,null,-1),Ma=s(" Data type: "),Sa=s("coordinates"),Ha=n("br",null,null,-1),Ua=s(" Required: no"),Ba=n("br",null,null,-1),Ga=s(" This provides the ability to display the postNL locations through the coordinates. If only latitude or longitude is passed as a parameter, it will be ignored and will simply use zip code for searching locations."),Oa=n("h5",{id:"_8-a-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_8-a-4","aria-hidden":"true"},"#"),s(" 8.A.4 Examples")],-1),Ca=n("p",null,[n("strong",null,"Request")],-1),Ja=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/delivery_options?platform=myparcel&carrier=postnl&cc=nl&number=31&postal_code=2132JE HTTP/1.1
accept: application/json;charset=utf-8;version=2.0
`)])],-1),Ka=n("p",null,[n("strong",null,"Response")],-1),Ia=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`HTTP/1.1 200 OK Content-Type:application/json;charset=utf-8
`)])],-1),Fa=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Va=n("p",null,[n("strong",null,"Request")],-1),Qa=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/pickup_locations?carrierName=postnl&platform=myparcel&carrier=postnl&cc=nl&number=31&postal_code=2132JE HTTP/1.1
accept: application/json;charset=utf-8;version=2.0
`)])],-1),Wa=n("p",null,[n("strong",null,"Response")],-1),Ya=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`HTTP/1.1 200 OK Content-Type:application/json;charset=utf-8
`)])],-1),Za=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),Xa=n("ul",null,[n("li",null,"Destination: 2132JE 31"),n("li",null,"PostNL"),n("li",null,"cutoff time 16:00"),n("li",null,"dropoff days Mon - Sat"),n("li",null,"dropoff delay: 0"),n("li",null,"delivery days window: 2"),n("li",null,"no morning")],-1),$a=n("p",null,[n("strong",null,"Request")],-1),no=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/delivery_options?platform=myparcel&carrier=postnl&cc=nl&number=31&postal_code=2132JE&cutoff_time=16:00:00&dropoff_days=1;2;3;4;5;6&monday_delivery=1&dropoff_delay=0&deliverydays_window=2&exclude_delivery_type=1 HTTP/1.1
Accept: application/json;charset=utf-8;version=2.0
`)])],-1),so=n("p",null,[n("strong",null,"Response")],-1),to=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`HTTP/1.1 200 OK Content-Type:application/json;charset=utf-8
`)])],-1),ao=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),oo=n("p",null,"2132JE, 31 for PostNL cutoff time 16h00, dropoff days Mon - Sat, dropoff delay is zero, delivery window is 2 days and morning is excluded as delivery name.",-1),eo=n("p",null,[n("strong",null,"Request")],-1),po=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/pickup_locations?platform=myparcel&carrier=postnl&cc=nl&number=31&postal_code=2132JE&cutoff_time=16:00:00&dropoff_days=1;2;3;4;5;6&monday_delivery=1&dropoff_delay=0&deliverydays_window=2&exclude_delivery_type=1 HTTP/1.1
Accept: application/json;charset=utf-8;version=2.0
`)])],-1),co=n("p",null,[n("strong",null,"Response")],-1),lo=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`HTTP/1.1 200 OK Content-Type:application/json;charset=utf-8
`)])],-1),ro=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
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
`)])])],-1),uo=n("p",null,[n("strong",null,"Get delivery options for Belgium")],-1),io=n("p",null,[n("strong",null,"Request")],-1),ko=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/delivery_options?platform=belgie&carrier=bpost&cc=be&number=49&postal_code=1000  HTTP/1.1
Accept: application/json;charset=utf-8;version=2.0
`)])],-1),yo=n("p",null,[n("strong",null,"Response")],-1),_o=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[s("HTTP/"),n("span",{class:"token number"},"1.1"),s(),n("span",{class:"token number"},"200"),s(" OK Content-Type"),n("span",{class:"token operator"},":"),s("application/json;charset=utf"),n("span",{class:"token number"},"-8"),s(`
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
`)])])],-1),mo=n("p",null,[n("strong",null,"Get pickup options for Belgium")],-1),ho=n("p",null,[n("strong",null,"Request")],-1),go=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`GET https://api.myparcel.nl/pickup_locations?platform=belgie&carrier=bpost&cc=be&number=49&postal_code=1000  HTTP/1.1
Accept: application/json;charset=utf-8;version=2.0
`)])],-1),fo=n("p",null,[n("strong",null,"Response")],-1),bo=n("div",{class:"language-json ext-json"},[n("pre",{class:"language-json"},[n("code",null,[s("HTTP/"),n("span",{class:"token number"},"1.1"),s(),n("span",{class:"token number"},"200"),s(" OK Content-Type"),n("span",{class:"token operator"},":"),s("application/json;charset=utf"),n("span",{class:"token number"},"-8"),s(`
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
`)])])],-1);function vo(zo,Eo){const p=c("ApiLink"),o=c("AutoLink"),e=c("DetailsExpand");return r(),u("div",null,[k,d,n("p",null,[y,t(p,{to:"1_D"},{default:a(()=>[_]),_:1}),m]),h,g,n("p",null,[f,b,v,t(o,{item:"/api-reference/04.data-types#array"},{default:a(()=>[z]),_:1}),E,t(p,{to:"9_a"},{default:a(()=>[x]),_:1}),w,t(p,{to:"9_B"},{default:a(()=>[A]),_:1}),T]),n("p",null,[R,t(o,{item:"http://github.com/myparcelnl/checkout"},{default:a(()=>[P]),_:1}),j,t(o,{item:"https://myparcelnl.github.io/delivery-options/"},{default:a(()=>[N]),_:1}),D]),q,n("table",null,[n("tbody",null,[L,M,S,H,U,n("tr",null,[B,G,n("td",null,[t(o,{item:"/api-reference/04.data-types#country_code"},{default:a(()=>[O]),_:1})])]),n("tr",null,[C,n("td",null,[t(o,{item:"/api-reference/04.data-types#string"},{default:a(()=>[J]),_:1})])]),n("tr",null,[K,n("td",null,[t(o,{item:"/api-reference/04.data-types#string"},{default:a(()=>[I]),_:1})])]),n("tr",null,[F,n("td",null,[t(o,{item:"/api-reference/04.data-types#string"},{default:a(()=>[V]),_:1})])]),n("tr",null,[Q,n("td",null,[t(o,{item:"/api-reference/04.data-types#string"},{default:a(()=>[W]),_:1})])]),n("tr",null,[Y,n("td",null,[t(o,{item:"/api-reference/04.data-types#platform"},{default:a(()=>[Z]),_:1})])]),n("tr",null,[X,n("td",null,[t(o,{item:"/api-reference/04.data-types#carrier"},{default:a(()=>[$]),_:1})])]),n("tr",null,[nn,n("td",null,[t(o,{item:"/api-reference/04.data-types#time"},{default:a(()=>[sn]),_:1})])]),n("tr",null,[tn,n("td",null,[t(o,{item:"/api-reference/04.data-types#date"},{default:a(()=>[an]),_:1})])]),n("tr",null,[on,n("td",null,[t(o,{item:"/api-reference/04.data-types#time"},{default:a(()=>[en]),_:1})])]),n("tr",null,[pn,n("td",null,[t(o,{item:"/api-reference/04.data-types#weekday_digit"},{default:a(()=>[cn]),_:1})])]),n("tr",null,[ln,n("td",null,[t(o,{item:"/api-reference/04.data-types#boolean"},{default:a(()=>[rn]),_:1})])]),n("tr",null,[un,n("td",null,[t(o,{item:"/api-reference/04.data-types#integer"},{default:a(()=>[kn]),_:1})])]),n("tr",null,[dn,n("td",null,[t(o,{item:"/api-reference/04.data-types#integer"},{default:a(()=>[yn]),_:1})])]),n("tr",null,[_n,n("td",null,[t(o,{item:"/api-reference/04.data-types#delivery_type"},{default:a(()=>[mn]),_:1})])]),n("tr",null,[hn,n("td",null,[t(o,{item:"/api-reference/04.data-types#boolean"},{default:a(()=>[gn]),_:1})])]),n("tr",null,[fn,n("td",null,[t(o,{item:"/api-reference/04.data-types#coordinates"},{default:a(()=>[bn]),_:1})])]),n("tr",null,[vn,n("td",null,[t(o,{item:"/api-reference/04.data-types#coordinates"},{default:a(()=>[zn]),_:1})])]),En,xn,wn,An,Tn,Rn,Pn,jn,Nn])]),Dn,n("p",null,[qn,Ln,Mn,t(o,{item:"/api-reference/04.data-types#country_code"},{default:a(()=>[Sn]),_:1}),Hn,Un,Bn,Gn]),n("p",null,[On,Cn,Jn,t(o,{item:"/api-reference/04.data-types#string"},{default:a(()=>[Kn]),_:1}),In,Fn,Vn,Qn]),n("p",null,[Wn,Yn,Zn,t(o,{item:"/api-reference/04.data-types#string"},{default:a(()=>[Xn]),_:1}),$n,ns,ss,ts]),n("p",null,[as,os,es,t(o,{item:"/api-reference/04.data-types#string"},{default:a(()=>[ps]),_:1}),cs,ls,rs,us]),n("p",null,[is,ks,ds,t(o,{item:"/api-reference/04.data-types#string"},{default:a(()=>[ys]),_:1}),_s,ms,hs,gs]),n("p",null,[fs,bs,vs,t(o,{item:"/api-reference/04.data-types#platform"},{default:a(()=>[zs]),_:1}),Es,xs,ws,As]),n("p",null,[Ts,Rs,Ps,t(o,{item:"/api-reference/04.data-types#time"},{default:a(()=>[js]),_:1}),Ns,Ds,qs,Ls,Ms,Ss]),n("p",null,[Hs,Us,Bs,t(o,{item:"/api-reference/04.data-types#date"},{default:a(()=>[Gs]),_:1}),Os,Cs,Js,Ks]),n("p",null,[Is,Fs,Vs,t(o,{item:"/api-reference/04.data-types#time"},{default:a(()=>[Qs]),_:1}),Ws,Ys,Zs,Xs,$s,nt]),n("p",null,[st,tt,at,t(o,{item:"/api-reference/04.data-types#weekday_digit"},{default:a(()=>[ot]),_:1}),et,pt,ct,lt,rt,ut]),n("p",null,[it,kt,dt,t(o,{item:"/api-reference/04.data-types#boolean"},{default:a(()=>[yt]),_:1}),_t,mt,ht,gt,t(o,{item:"https://blog.myparcel.nl/maandagbezorging"},{default:a(()=>[ft]),_:1}),bt,vt,n("strong",null,[zt,t(o,{item:"#dropoff_days"},{default:a(()=>[Et]),_:1}),xt,t(o,{item:"#monday_delivery"},{default:a(()=>[wt]),_:1}),At,t(o,{item:"#cutoff_time"},{default:a(()=>[Tt]),_:1}),Rt])]),n("p",null,[Pt,jt,Nt,t(o,{item:"/api-reference/04.data-types#boolean"},{default:a(()=>[Dt]),_:1}),qt,Lt,Mt,St,Ht,n("strong",null,[Ut,t(o,{item:"#dropoff_days"},{default:a(()=>[Bt]),_:1}),Gt,t(o,{item:"#saturday_delivery"},{default:a(()=>[Ot]),_:1}),Ct])]),n("p",null,[Jt,Kt,It,t(o,{item:"/api-reference/04.data-types#integer"},{default:a(()=>[Ft]),_:1}),Vt,Qt,Wt,Yt,Zt,Xt]),n("p",null,[$t,na,sa,t(o,{item:"/api-reference/04.data-types#integer"},{default:a(()=>[ta]),_:1}),aa,oa,ea,pa,ca,la]),n("p",null,[ra,ua,ia,t(o,{item:"/api-reference/04.data-types#delivery_type"},{default:a(()=>[ka]),_:1}),da,ya,_a,ma]),n("p",null,[ha,ga,fa,t(o,{item:"/api-reference/04.data-types#boolean"},{default:a(()=>[ba]),_:1}),va,za,Ea,xa]),n("p",null,[wa,Aa,Ta,t(o,{item:"/api-reference/04.data-types#coordinates"},{default:a(()=>[Ra]),_:1}),Pa,ja,Na,Da]),n("p",null,[qa,La,Ma,t(o,{item:"/api-reference/04.data-types#coordinates"},{default:a(()=>[Sa]),_:1}),Ha,Ua,Ba,Ga]),Oa,t(e,{tag:"h4",title:"Get delivery options for 2132JE, 31 for PostNL"},{default:a(()=>[Ca,Ja,Ka,Ia,Fa]),_:1}),t(e,{tag:"h4",title:"Get pickup options for 2132JE, 31 for PostNL"},{default:a(()=>[Va,Qa,Wa,Ya,Za]),_:1}),t(e,{tag:"h4",title:"Get delivery options with a lot of options"},{default:a(()=>[Xa,$a,no,so,to,ao]),_:1}),t(e,{tag:"h4",title:"Get pickup options for..."},{default:a(()=>[oo,eo,po,co,lo,ro,uo,io,ko,yo,_o,mo,ho,go,fo,bo]),_:1})])}var Ao=l(i,[["render",vo],["__file","08.delivery-options.html.vue"]]);export{Ao as default};
