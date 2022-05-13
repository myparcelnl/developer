<template><h1 id="_4-data-types" tabindex="-1"><a class="header-anchor" href="#_4-data-types" aria-hidden="true">#</a> 4. Data Types</h1>
<p>Our API defines its own data types.</p>
<nav class="table-of-contents"><ul><li><RouterLink to="#array">array</RouterLink></li><li><RouterLink to="#boolean">boolean</RouterLink></li><li><RouterLink to="#platform">platform</RouterLink></li><li><RouterLink to="#carrier">carrier</RouterLink></li><li><RouterLink to="#coordinates">coordinates</RouterLink></li><li><RouterLink to="#country-code">country_code</RouterLink></li><li><RouterLink to="#currency">currency</RouterLink></li><li><RouterLink to="#date">date</RouterLink></li><li><RouterLink to="#delivery-type">delivery_type</RouterLink></li><li><RouterLink to="#description">description</RouterLink></li><li><RouterLink to="#eori-number">eori_number</RouterLink></li><li><RouterLink to="#integer">integer</RouterLink></li><li><RouterLink to="#float">float</RouterLink></li><li><RouterLink to="#isic-code">isic_code</RouterLink></li><li><RouterLink to="#label-position">label_position</RouterLink></li><li><RouterLink to="#main">main</RouterLink></li><li><RouterLink to="#month-digit">month_digit</RouterLink></li><li><RouterLink to="#package-contents">package_contents</RouterLink></li><li><RouterLink to="#package-type">package_type</RouterLink></li><li><RouterLink to="#paper-size">paper_size</RouterLink></li><li><RouterLink to="#price">price</RouterLink></li><li><RouterLink to="#shipment-status">shipment_status</RouterLink></li><li><RouterLink to="#sort-order">sort_order</RouterLink></li><li><RouterLink to="#webhook-status">Webhook status</RouterLink></li><li><RouterLink to="#string">string</RouterLink></li><li><RouterLink to="#text">text</RouterLink></li><li><RouterLink to="#time">time</RouterLink></li><li><RouterLink to="#timestamp">timestamp</RouterLink></li><li><RouterLink to="#vat-number">vat_number</RouterLink></li><li><RouterLink to="#weekday-digit">weekday_digit</RouterLink></li><li><RouterLink to="#weekday-string">weekday_string</RouterLink></li></ul></nav>
<h2 id="array" tabindex="-1"><a class="header-anchor" href="#array" aria-hidden="true">#</a> array</h2>
<p>Array of elements. Can contain all other data types.</p>
<DataTypeDefinition pattern="*" example="[]" />
<h2 id="boolean" tabindex="-1"><a class="header-anchor" href="#boolean" aria-hidden="true">#</a> boolean</h2>
<p>Boolean value</p>
<DataTypeDefinition values="0,1" />
<h2 id="platform" tabindex="-1"><a class="header-anchor" href="#platform" aria-hidden="true">#</a> platform</h2>
<p>Platform name</p>
<DataTypeDefinition values="myparcel,flespakket,belgie" />
<h2 id="carrier" tabindex="-1"><a class="header-anchor" href="#carrier" aria-hidden="true">#</a> carrier</h2>
<p>Carrier id</p>
<DataTypeDefinition values="1,2,3,4,5,8" example="1 (PostNL),2 (bpost. Only available on sendmyparcel.be),3 (CheapCargo/pallets),4 (DPD. Only available on sendmyparcel.be),5 (Instabox. Only available on MyParcel.nl),8 (UPS. Only available on MyParcel.nl)" />
<h2 id="coordinates" tabindex="-1"><a class="header-anchor" href="#coordinates" aria-hidden="true">#</a> coordinates</h2>
<p>Latitude or longitude.</p>
<DataTypeDefinition pattern="/[-+]?[\d]{1,2}.\d+/" example="52.192150633052" />
<h2 id="country-code" tabindex="-1"><a class="header-anchor" href="#country-code" aria-hidden="true">#</a> country_code</h2>
<p>ISO3166-1 alpha2 country code.</p>
<DataTypeDefinition pattern="/[A-Z]{2}/" example="NL, BE, CW" />
<h2 id="currency" tabindex="-1"><a class="header-anchor" href="#currency" aria-hidden="true">#</a> currency</h2>
<p>ISO 4217 currency code. Currently, only 'EUR' is supported.</p>
<DataTypeDefinition pattern="/[A-Z]{3}/" example="EUR" />
<h2 id="date" tabindex="-1"><a class="header-anchor" href="#date" aria-hidden="true">#</a> date</h2>
<p>Date.</p>
<DataTypeDefinition pattern="/\d{4}-\d{2}-\d{2}/" example="2022-04-21" />
<h2 id="delivery-type" tabindex="-1"><a class="header-anchor" href="#delivery-type" aria-hidden="true">#</a> delivery_type</h2>
<p>Delivery type.</p>
<DataTypeDefinition values="1,2,3,4" example="1. morning,2. standard,3. evening,4. pickup"/>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> description</h2>
<p>Delivery type.</p>
<DataTypeDefinition pattern="/.{0,255}/" example="Zending bezorgd" />
<h2 id="eori-number" tabindex="-1"><a class="header-anchor" href="#eori-number" aria-hidden="true">#</a> eori_number</h2>
<p>Economic Operators Registration and Identification. This field is required for</p>
<DataType type="carrier" name="dpd" /> shipments to the United Kingdom. In this
field you can enter the EORI number
of the sender in case of a B2C shipment and the EORI number of the recipient in
case of a B2B shipment.
<DataTypeDefinition pattern="/[A-Z]{2}\d{9,12}/" example="NL012345678" />
<h2 id="integer" tabindex="-1"><a class="header-anchor" href="#integer" aria-hidden="true">#</a> integer</h2>
<p>Numeric value.</p>
<DataTypeDefinition pattern="/\d+/" example="20,5" />
<h2 id="float" tabindex="-1"><a class="header-anchor" href="#float" aria-hidden="true">#</a> float</h2>
<p>Numeric value with decimal fractions.</p>
<DataTypeDefinition pattern="/\d+\.\d+/" example="1.1248" />
<h2 id="isic-code" tabindex="-1"><a class="header-anchor" href="#isic-code" aria-hidden="true">#</a> isic_code</h2>
<p>International Standard Industry Classification. This is mandatory for the
customs form when shipping outside EU. Codes can be found on
the <AutoLink item="https://tarief.douane.nl/arctictariff-public-web/#!/taric/nomenclature/sbn?d=I&cc=&l=nl&ql=nl&ea=false">Douane</AutoLink>
website.</p>
<DataTypeDefinition pattern="/\d{1,4}/" example="9609 (Pencils)" />
<h2 id="label-position" tabindex="-1"><a class="header-anchor" href="#label-position" aria-hidden="true">#</a> label_position</h2>
<p>The position of the label on the paper.</p>
<DataTypeDefinition values="1,2,3,4" example="1. (top-left),2. (top-right),3. (bottom-left),4. (bottom-right)" />
<h2 id="main" tabindex="-1"><a class="header-anchor" href="#main" aria-hidden="true">#</a> main</h2>
<p>All statuses are divided into 5 main &quot;categories&quot;. Only the last status in a
category gets this attribute, meaning if there are consecutive duplicate
statuses still only the most recent status gets the <code>main</code> attribute. Other
statuses get the value <code>null</code>.</p>
<DataTypeDefinition pattern="/[a-z]/" example="registered,handed_to_carrier,sorting,distribution,delivered" />
<h2 id="month-digit" tabindex="-1"><a class="header-anchor" href="#month-digit" aria-hidden="true">#</a> month_digit</h2>
<p>The month in digit preceded by a zero for single digit months</p>
<DataTypeDefinition pattern="/[0-1]{1}[1-9]{1}/" example="01 (Jan),02 (Feb)" />
<h2 id="package-contents" tabindex="-1"><a class="header-anchor" href="#package-contents" aria-hidden="true">#</a> package_contents</h2>
<p>The package contents are only needed in case of shipping outside EU, this is
mandatory info for customs form.</p>
<p>The content type of a package.</p>
<DataTypeDefinition values="1,2,3,4,5" example="1. commercial goods,2. commercial samples,3. documents,4. gifts,5. return shipment" />
<h2 id="package-type" tabindex="-1"><a class="header-anchor" href="#package-type" aria-hidden="true">#</a> package_type</h2>
<p>The different shipments you can create. For SendMyParcel
only <DataType type="package_type" id="1" /> (package) is allowed.</p>
<DataTypeDefinition values="1,2,3,4" example="1. package,2. mailbox package,3. letter,4. digital stamp" />
<h2 id="paper-size" tabindex="-1"><a class="header-anchor" href="#paper-size" aria-hidden="true">#</a> paper_size</h2>
<p>The size of a paper as specified in ISO216.</p>
<DataTypeDefinition values="a4,a6" />
<h2 id="price" tabindex="-1"><a class="header-anchor" href="#price" aria-hidden="true">#</a> price</h2>
<p>Composite type containing integer and currency. The amount is without decimal
separators (in cents).</p>
<DataTypeDefinition pattern='{"amount": integer, "currency": currency }' example='{"amount": 10000, "currency": "EUR"}' />
<h2 id="shipment-status" tabindex="-1"><a class="header-anchor" href="#shipment-status" aria-hidden="true">#</a> shipment_status</h2>
<p>Shipment status.</p>
<DataTypeDefinition pattern="/\d+/" example="1 pending - concept,2 pending - registered,3 enroute - handed to carrier,4 enroute - sorting,5 enroute - distribution,6 enroute - customs,7 delivered - at recipient,8 delivered - ready for pickup,9 delivered - package picked up,10 delivered - return shipment ready for pickup,11 delivered - return shipment package picked up,12 printed - letter,13 inactive - credited,14 printed - digital stamp,30 inactive - concept,31 inactive - registered,32 inactive - enroute - handed to carrier,33 inactive - enroute - sorting,34 inactive - enroute - distribution,35 inactive - enroute - customs,36 inactive - delivered - at recipient,37 inactive - delivered - ready for pickup,38 inactive - delivered - package picked up" />
<h2 id="sort-order" tabindex="-1"><a class="header-anchor" href="#sort-order" aria-hidden="true">#</a> sort_order</h2>
<p>Sort order.</p>
<DataTypeDefinition values="ASC,DESC" />
<h2 id="webhook-status" tabindex="-1"><a class="header-anchor" href="#webhook-status" aria-hidden="true">#</a> Webhook status</h2>
<p>A webhook status.</p>
<DataTypeDefinition pattern="/[a-z]+/" example="success,failed" />
<h2 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> string</h2>
<p>Any alphanumeric value up to 255 characters unless specified otherwise.</p>
<DataTypeDefinition pattern="/.{0,255}/" example="3SMYPA123456789,Antareslaan 31,Nederland" />
<h2 id="text" tabindex="-1"><a class="header-anchor" href="#text" aria-hidden="true">#</a> text</h2>
<p>Any character up to a limit of 2048 characters.</p>
<DataTypeDefinition pattern="/.{0,2048}/" example="This is a test text." />
<h2 id="time" tabindex="-1"><a class="header-anchor" href="#time" aria-hidden="true">#</a> time</h2>
<p>A timestamp.</p>
<DataTypeDefinition pattern="/\d{2}:\d{2}:\d{2}/" example="08:00:00" />
<h2 id="timestamp" tabindex="-1"><a class="header-anchor" href="#timestamp" aria-hidden="true">#</a> timestamp</h2>
<p>A date with timestamp.</p>
<DataTypeDefinition pattern="/\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}(?:.\d{6})?/" example="2022-04-21 12:30:00,2022-04-21 13:00:00.000000" />
<h2 id="vat-number" tabindex="-1"><a class="header-anchor" href="#vat-number" aria-hidden="true">#</a> vat_number</h2>
<p>This field is required for DPD shipments to the United Kingdom. In this field
you can enter the VAT number of the sender in case of a B2C shipment and the VAT
number of the recipient in case of a B2B shipment.</p>
<DataTypeDefinition pattern="/.*{,15}/" example="NL000099998B57" />
<h2 id="weekday-digit" tabindex="-1"><a class="header-anchor" href="#weekday-digit" aria-hidden="true">#</a> weekday_digit</h2>
<p>Weekday digit. Note our weekdays start on Sunday.</p>
<DataTypeDefinition pattern="/[0-6]/" example="0 (Sunday), 1 (Monday)" />
<h2 id="weekday-string" tabindex="-1"><a class="header-anchor" href="#weekday-string" aria-hidden="true">#</a> weekday_string</h2>
<p>Weekday in string. Note our weekdays start on Sunday.</p>
<DataTypeDefinition values="sunday,monday,tuesday,wednesday,thursday,friday,saturday" />
</template>
