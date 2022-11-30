import React from "react"
import { Partytown } from "@builder.io/partytown/react"

const HeadComponents = [
  <Partytown key="partytown" debug={true} forward={["dataLayer.push"]} />,
  <link
    rel="preload"
    href="./fonts/GentiumBookBasic-BoldItalic.woff"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
    key="gentiumFont"
  />,
  <link
    rel="preload"
    href="./fonts/PermanentMarker-Regular.woff"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
    key="permanentFont"
  />,
]
export function onRenderBody({ setHeadComponents, setPostBodyComponents }) {
  setHeadComponents(HeadComponents),
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
