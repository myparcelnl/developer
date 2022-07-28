import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{o as d,c,a as o,b as t,w as s,d as e,e as p,r as a}from"./app.02e2e447.js";const _={},r=e("Create and directly download PDF with "),f=o("code",null,"setPdfOfLabels($position)",-1),h=e(" where "),u=o("code",null,"$positions",-1),m=e(" is the "),g=e("label position"),b=e(" value."),w=o("div",{class:"language-php ext-php"},[o("pre",{class:"language-php"},[o("code",null,`$consignments
    ->setPdfOfLabels()
    // Opens pdf "inline" by default, pass false as argument to download file instead
    ->downloadPdfOfLabels(false); 
`)])],-1),y=e("Create and echo download link to PDF with "),L=o("code",null,"setLinkOfLabels($position)",-1),k=e(" where "),v=o("code",null,"$positions",-1),x=e(" is the "),O=e("label position"),P=e(" value. If you want more than 25 labels in one response, "),$=o("code",null,"setLinkOfLabels",-1),B=e(" will automatically use a different endpoint. At that point, it is likely that the PDF is not ready yet. You should check periodically if the PDF is ready for download."),I=p(`<div class="language-php ext-php"><pre class="language-php"><code>echo $consignments 
    -&gt;setLinkOfLabels($positions)
    -&gt;getLinkOfLabels();
</code></pre></div><p>If you want to download a label at a later time, you can also use the following to fill the collection:</p><div class="language-php ext-php"><pre class="language-php"><code>$consignments = MyParcelCollection::findByReferenceIdentifier(&#39;order-146&#39;, &#39;api_key_from_backoffice&#39;);
$consignments
    -&gt;setPdfOfLabels()
    -&gt;downloadPdfOfLabels();
</code></pre></div><p>Instead of <code>findByReferenceIdentifier()</code> you can also use <code>findManyByReferenceIdentifier()</code>, <code>find()</code> or <code>findMany()</code>.</p>`,4),C=e("More information: ");function D(F,R){const n=a("RouterLink"),i=a("ApiLink");return d(),c("div",null,[o("p",null,[r,f,h,u,m,t(n,{to:"/documentation/50.php-sdk/02.examples/05.label-format-and-position.html"},{default:s(()=>[g]),_:1}),b]),w,o("p",null,[y,L,k,v,x,t(n,{to:"/documentation/50.php-sdk/02.examples/05.label-format-and-position.html"},{default:s(()=>[O]),_:1}),P,$,B]),I,o("p",null,[C,t(i,{to:"6_F"})])])}var N=l(_,[["render",D],["__file","10.create-and-download-labels.html.vue"]]);export{N as default};
