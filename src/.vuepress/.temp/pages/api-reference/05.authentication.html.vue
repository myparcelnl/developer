<template><h1 id="_5-authentication" tabindex="-1"><a class="header-anchor" href="#_5-authentication" aria-hidden="true">#</a> 5. Authentication</h1>
<p>HTTP basic access authentication on top of SSL is used for authentication. Every
request must include an Authorization header with base64 encoded API Key. Go
to <AutoLink item="https://www.base64encode.org/">base64encode.org</AutoLink> to convert your key to
base64.</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>GET /somelink HTTP/1.1
Authorization: bearer BASE64_ENCODED_API_KEY
</code></pre></div><p>Our API uses API keys for access control. When a <strong>Merchant</strong> wants to connect
an external system to our API he/she needs to create an <strong>API Key.</strong> This API
Key will be assigned the <strong>Broker</strong> role. Currently, the merchant is not able to
create or assign another role to an API Key. When you want to invalidate an API
key you should regenerate it. An intermediate system, such as
the <AutoLink item="https://backoffice.myparcel.nl/">MyParcelNL backoffice</AutoLink> or <AutoLink item="https://backoffice.sendmyparcel.be">SendMyParcel backoffice</AutoLink>, has its own API Key
but cannot access user resources. For this it needs to request a Session Token
so that it can perform actions on behalf of the user. The API Key and Session
Token are sent in the Authorization header.</p>
<h2 id="_5-1" tabindex="-1"><a class="header-anchor" href="#_5-1" aria-hidden="true">#</a> 5.1 Error codes</h2>
<p>Our API defines a list of error codes besides the HTTP status codes. Error codes
are divided in ranges to make it easier for developers to quickly diagnose and
solve problems. Errors are returned as an <code>Error</code> object.</p>
</template>
