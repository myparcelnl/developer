import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{o as c,c as i,b as o,w as l,a as e,d as n,r as t}from"./app.033e6678.js";const _={},p=e("p",null,"You can search and filter consignments by certain values:",-1),d=e("div",{class:"language-php ext-php"},[e("pre",{class:"language-php"},[e("code",null,`$consignments = MyParcelCollection::query(
    'api_key_from_backoffice',
    [
        'q'                    => 'Niels',
        'reference_identifier' => 'order-1234',
        'status'               => 2,
        'from'                 => '2020-01-01 00:00:00',
        'to'                   => '2020-02-01 00:00:00',
        'page'                 => 1,
        'size'                 => 200,
        'order'                => 'DESC',
        'package_type'         => 1,
        'region'               => 'NL;EU',
        'dropoff_today'        => 1,
    ]
);
`)])],-1),u=e("p",null,[n("For "),e("code",null,"q"),n(" and "),e("code",null,"reference identifier"),n(" you can use "),e("code",null,"*"),n(" (wildcards) to search smarter.")],-1),f=e("p",null,"If the 2nd parameter is an object, then public properties will be used. If you query in many ways, creating a separate class can provide a clean solution.",-1),m=n("For more information, see "),h=n(".");function g(y,k){const s=t("Message"),a=t("ApiLink");return c(),i("div",null,[p,d,u,o(s,{title:"",type:"tip"},{default:l(()=>[f]),_:1}),e("p",null,[m,o(a,{to:"6_E"}),h])])}var q=r(_,[["render",g],["__file","08.query-consignments.html.vue"]]);export{q as default};
