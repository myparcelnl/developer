import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as s,a as e}from"./app.02e2e447.js";const o={},i=e("p",null,"This example uses only the required methods to create a shipment and download its label.",-1),r=e("div",{class:"language-php ext-php"},[e("pre",{class:"language-php"},[e("code",null,`$consignment = (ConsignmentFactory::createByCarrierId(PostNLConsignment::CARRIER_ID))
    ->setApiKey('api_key_from_backoffice')
    ->setReferenceIdentifier('order-146')
    ->setCountry('NL')
    ->setPerson('Piet Hier')
    ->setFullStreet('Plein 1945 55b')
    ->setPostalCode('2231JE')
    ->setCity('Amsterdam')
    ->setEmail('piet.hier@test.nl')
    ->setLabelDescription('Order 146');
    
$consignments = (new MyParcelCollection())
    ->addConsignment($consignment)
    ->setPdfOfLabels();

$consignmentId = $consignments->first()->getConsignmentId();

$consignments->downloadPdfOfLabels();
`)])],-1),a=[i,r];function c(l,d){return t(),s("div",null,a)}var p=n(o,[["render",c],["__file","01.create-consignment.html.vue"]]);export{p as default};
