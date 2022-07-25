import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c as r,a as n,d as e}from"./app.e0bc0234.js";const s={},a=n("p",null,[e("This example creates a consignment and a related return consignment by adding them to one "),n("code",null,"MyParcelCollection()"),e(" and then creates and downloads a single PDF file with both labels.")],-1),i=n("div",{class:"language-php ext-php"},[n("pre",{class:"language-php"},[n("code",null,`// Create the collection before the loop
$consignments = new MyParcelCollection();

// Loop through your shipments, adding each to the same MyParcelCollection
foreach ($yourShipments as $yourShipment) {
    $consignment = ((ConsignmentFactory::createByCarrierId(PostNLConsignment::CARRIER_ID))
        ->setApiKey('api_key_from_backoffice')
        ->setCountry($yourShipment['cc'])
        ->setPerson($yourShipment['person'])
        ->setCompany($yourShipment['company'])
        ->setFullStreet($yourShipment['full_street_input'])
        ->setPostalCode($yourShipment['postal_code'])
        ->setCity($yourShipment['city'])
        ->setLabelDescription($yourShipment['label_description'])
    );
        
    // Add the consignment to the collection and generate the return consignment
    // When there are no options set, the options from the parent consignment are used
    $consignments
        ->addConsignment($consignment)
        ->generateReturnConsignments(
            false,
            function (
                AbstractConsignment $returnConsignment,
                AbstractConsignment $parent
            ): AbstractConsignment {
                $returnConsignment->setLabelDescription(
                    'Return: ' . $parent->getLabelDescription() .
                    ' This label is valid until: ' . date("d-m-Y", strtotime("+ 28 days"))
                );
                $returnConsignment->setSignature(true);

                return $returnConsignment;
            }
        );
}
`)])],-1),c=[a,i];function l(m,p){return o(),r("div",null,c)}var d=t(s,[["render",l],["__file","04.create-return-in-the-box.html.vue"]]);export{d as default};
