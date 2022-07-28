import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as r,c as a,a as e,b as s,w as i,d as t,r as c}from"./app.033e6678.js";const d={},l=t("You can use "),p=e("code",null,"DeliveryOptionsAdapterFactory",-1),u=t(" if you use the following code in your checkout: "),y=t("Delivery Options"),_=t(" You can use these adapters to receive the options anywhere in your code in a consistent way. If you also have the options in a different format, you can also make your own adapter."),h=e("div",{class:"language-php ext-php"},[e("pre",{class:"language-php"},[e("code",null,`use MyParcelNL\\Sdk\\src\\Adapter\\DeliveryOptions\\DeliveryOptionsFromOrderAdapter;
use MyParcelNL\\Sdk\\src\\Factory\\DeliveryOptionsAdapterFactory;

try {
	// Create new instance from known json
	$deliveryOptions = DeliveryOptionsAdapterFactory::create(json_decode($dataFromCheckout));
} catch (BadMethodCallException $e) {
	// Create new instance from your own data
	$deliveryOptions = new DeliveryOptionsFromOrderAdapter(null, (array) $meta);
}
`)])],-1),m=e("p",null,"Adapters are independent of consignments. It is therefore your responsibility to transform an adapter into a consignment.",-1);function f(v,O){const o=c("AutoLink");return r(),a("div",null,[e("p",null,[l,p,u,s(o,{item:"https://github.com/myparcelnl/delivery-options"},{default:i(()=>[y]),_:1}),_]),h,m])}var A=n(d,[["render",f],["__file","03.delivery-options.html.vue"]]);export{A as default};
