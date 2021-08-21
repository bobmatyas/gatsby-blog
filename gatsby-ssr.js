import React from "react";
export function onRenderBody( { setPostBodyComponents } ) {
    setPostBodyComponents(
    [React.createElement(`div`, {
        key: `cloudflare-analytics`,
        dangerouslySetInnerHTML: {
          __html: `
            <!-- Cloudflare Web Analytics -->
            <script defer src='https://static.cloudflareinsights.com/beacon.min.js'
              data-cf-beacon='{"token": "9c46957e3f89451a8c879dc672753cfa"}'>
            </script>
            <!-- End Cloudflare Web Analytics -->
        `
        }
      })
    ])
}