import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c as s,a as e,d as n}from"./app.e0bc0234.js";const c={},a=e("p",null,[n("This example creates multiple consignments by adding them to one "),e("code",null,"MyParcelCollection()"),n(" and then creates and downloads one PDF with all labels.")],-1),r=e("div",{class:"language-php ext-php"},[e("pre",{class:"language-php"},[e("code",null,`// Create the collection before the loop
$consignments = (new MyParcelCollection())
    ->setUserAgents(['name_of_cms', '1.0']); 

// Loop through your shipments, adding each to the same MyParcelCollection
foreach ($yourShipments as $yourShipment) {
    $consignment = ((ConsignmentFactory::createByCarrierId(PostNLConsignment::CARRIER_ID))
        ->setApiKey('api_key_from_backoffice')
        ->setReferenceIdentifier($yourShipment['reference_id'])
        ->setPerson($yourShipment['name'])
        ->setPostalCode($yourShipment['postal_code'])
        ->setFullStreet($yourShipment['full_street']) 
        ->setCity($yourShipment['city'])
    );
        
    // Add each consignment to the collection created before
    $consignments
        ->addConsignment($consignment);
}
`)])],-1),l=[a,r];function i(m,d){return o(),s("div",null,l)}var _=t(c,[["render",i],["__file","03.create-multiple-consignments.html.vue"]]);export{_ as default};
