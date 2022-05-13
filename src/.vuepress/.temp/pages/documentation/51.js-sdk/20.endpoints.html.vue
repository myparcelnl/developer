<template><h1 id="endpoints" tabindex="-1"><a class="header-anchor" href="#endpoints" aria-hidden="true">#</a> Endpoints</h1>
<h2 id="public" tabindex="-1"><a class="header-anchor" href="#public" aria-hidden="true">#</a> Public</h2>
<p>Public endpoints do not require authorization and are safe to use in a browser.</p>
<ul>
<li>Delivery options
<ul>
<li><AutoLink item="./src/endpoints/public/delivery-options/GetDeliveryOptions.ts">GetDeliveryOptions</AutoLink></li>
</ul>
</li>
<li>Pickup locations
<ul>
<li><AutoLink item="./src/endpoints/public/pickup-locations/GetPickupLocations.ts">GetPickupLocations</AutoLink></li>
</ul>
</li>
<li>Carriers
<ul>
<li><AutoLink item="./src/endpoints/public/carriers/GetCarriers.ts">GetCarriers</AutoLink></li>
<li><AutoLink item="./src/endpoints/public/carriers/GetCarrier.ts">GetCarrier</AutoLink></li>
</ul>
</li>
</ul>
<h2 id="private" tabindex="-1"><a class="header-anchor" href="#private" aria-hidden="true">#</a> Private</h2>
<p>Private endpoints require an Authorization header. This should be a base64
encoded MyParcel API key. You can create one in the shop settings in
our [backoffice]. See [Authorization] in the API documentation for more
information.</p>
<ul>
<li>Shipments
<ul>
<li><AutoLink item="./src/endpoints/private/shipments/GetShipment.ts">GetShipment</AutoLink></li>
<li><AutoLink item="./src/endpoints/private/shipments/GetShipments.ts">GetShipments</AutoLink></li>
<li><AutoLink item="./src/endpoints/private/shipments/PostShipments.ts">PostShipments</AutoLink></li>
</ul>
</li>
</ul>
</template>
