import type { GoogleTagManagerPluginOptions } from '../../shared';

export const useSetupGoogleTagManager = (options: GoogleTagManagerPluginOptions): void => {
  // avoid duplicated import
  if (window.dataLayer) {
    return;
  }

  window.dataLayer = [];

  const gtmScript = document.createElement('script');
  gtmScript.text = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${options.id}');`;
  document.head.append(gtmScript);

  const bodyScript = document.createElement('noscript');
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.googletagmanager.com/ns.html?id=${options.id}`;
  iframe.height = '0';
  iframe.width = '0';
  iframe.style.display = 'none';
  iframe.style.visibility = 'hidden';

  bodyScript.appendChild(iframe);
  document.body.prepend(bodyScript);
};
