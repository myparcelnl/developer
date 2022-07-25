import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as l,a as e,b as a,w as c,d as n,r as i}from"./app.e0bc0234.js";const r={},d=e("h3",{id:"myparcelcollection",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#myparcelcollection","aria-hidden":"true"},"#"),n(" MyParcelCollection")],-1),h=n("Stores all consignments to communicate with the MyParcel API. MyParcelCollection also contains almost "),m=n("all methods"),u=n(" from Laravel Collections. If you use Laravel it also extends "),p=e("code",null,"\\Illuminate\\Support\\Collection",-1),_=n("."),f=e("p",null,[e("code",null,"MyParcelNL/Sdk/src/Helper/MyParcelCollection.php")],-1),g=e("div",{class:"language-php ext-php"},[e("pre",{class:"language-php"},[e("code",null,`    // Add consignment to collection
    ->addConsignment() 
    // Generate the return consignments based on already added consignments
    ->generateReturnConsignments() 

    // Get consignments from the collection
    ->getConsignments()
    ->getConsignmentByApiId()
    ->getConsignmentsByReferenceIdentifier()

    // Clear the collection
    ->clearConsignmentsCollection()

    // Create or delete concept shipments in the MyParcel Backoffice
    ->createConcepts()
    ->deleteConcepts()
    
    ->getOneConsignment()
    ->getRequestBody()
    
    // Send return label to customer. The customer can pay and download the label
    ->sendReturnLabelMails()
    // Set id and run this function to update all the information about this shipment 
    ->setLatestData() 
    
    ->setLinkOfLabels()
    ->getLinkOfLabels()

    // Refer to 
    ->setPdfOfLabels()
    ->downloadPdfOfLabels()
    
    // To give us insight into which CMS you're connecting from, you should send a User-Agent. 
    // If you're using a known CMS it's required. 
    // You must send the name of the CMS (required) followed by a version number (optional).
    ->setUserAgents(['name_of_cms', '1.0'])
    ->getUserAgent()
`)])],-1);function C(y,b){const t=i("AutoLink");return s(),l("div",null,[d,e("p",null,[h,a(t,{item:"https://laravel.com/docs/5.7/collections"},{default:c(()=>[m]),_:1}),u,p,_]),f,g])}var M=o(r,[["render",C],["__file","02.helpers.html.vue"]]);export{M as default};
