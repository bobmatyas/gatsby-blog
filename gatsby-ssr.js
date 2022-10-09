import React from "react"
import { Partytown } from "@builder.io/partytown/react"

export function onRenderBody({ setPostBodyComponents }) {
  ;(<Partytown key="partytown" debug={true} forward={["dataLayer.push"]} />),
    setPostBodyComponents([
      React.createElement(`div`, {
        key: `cloudflare-analytics`,
        dangerouslySetInnerHTML: {
          __html: `
            <!-- Cloudflare Web Analytics -->
            <script type="text/partytown" src='https://static.cloudflareinsights.com/beacon.min.js'
              data-cf-beacon='{"token": "9c46957e3f89451a8c879dc672753cfa"}'>
            </script>
            <!-- End Cloudflare Web Analytics -->
        `,
        },
      }),
    ])
}
