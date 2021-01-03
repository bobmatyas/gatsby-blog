---
title:  "Adding Cloudflare Web Analytics to GatsbyJS"
date:   "2021-01-03"
description: "An overview of how I added Cloudflare's analytics offering to this site."
---

![Screenshot of Cloudflare Web Analytics Dashboard](./../../cloudflare-analytics.jpg)

Last month, Cloudflare opened up the beta version of their new [Web Analytics platform](https://www.cloudflare.com/web-analytics/). The new offering caught my eye when it was initially [announced earlier in the fall](https://www.searchenginejournal.com/cloudflare-web-analytics/382498/) with Cloudflare promoting the service as “privacy-first” alternative to other analytics products such as Google.

I have always been interested in lessening my reliance on Google’s data-mining products, so this new offering immediately appealed to me. I decided to install Cloudflare Analytics on my personal web site to see how it works. I haven’t used Google Analytics on this site, but I am familiar with it from other projects. One will immediately notice that Cloudflare Analytics offers considerably less detail and no capacity for events, campaigns, etc, but that’s fine for my use case. Additionally, it does some nice things like not tracking IP addresses. They explain this:

> Cloudflare Web Analytics does not use any client-side state, such as cookies or localStorage, to collect usage metrics. We also don’t “fingerprint” individuals via their IP address, User Agent string, or any other data for the purpose of displaying analytics. 

This goes along with other pro-privacy policies, such as [keeping minimal logs](https://blog.cloudflare.com/what-cloudflare-logs/), removing its reliance on [Google’s ReCaptcha](https://www.bleepingcomputer.com/news/technology/cloudflare-drops-googles-recaptcha-due-to-privacy-concerns/), and interest in [building more privacy into DNS services](https://blog.cloudflare.com/oblivious-dns/). 
 
## Options for Installing Cloudflare Web Analytics

Cloudflare Web Analytics can be installed in two ways. The preferred way is for you to proxy your site behind Cloudflare. In this case, Cloudflare generates analytics from their server logs without needing to add any code to your site. If this doesn’t work for you, Cloudflare also allows you to install a JavaScript beacon on your site. It’s a lightweight script (under 10k uncompressed) and only a single line, making it easy to install without having a major impact on site load time. They provide the code snippet and you just have to place it before your closing BODY tag as you would most other third-party  JavaScript. For a standard site, you would just need to open your template and paste the snippet before the closing BODY tag:

```javascript
<!-- Cloudflare Web Analytics -->
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "YOUR_TOKEN_HERE"}'></script>
<!-- End Cloudflare Web Analytics -->
```

## Adding Cloudflare Analytics to GatsbyJS

I generate my blog using [GatsbyJS](https://www.gatsbyjs.com) and host it on Netlify. Netlify does not like it when you place [Cloudflare in front of their service](https://www.netlify.com/blog/2017/03/28/why-you-dont-need-cloudflare-with-netlify/). Some folks have been able to get it to work, but I have always run into trouble. Consequently, I needed to make use of the JavaScript snippet.

To set it up, I logged into Cloudflare and turned on Web Analytics for my domain. This gave me a snippet like:

```javascript
<!-- Cloudflare Web Analytics -->
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "YOUR_TOKEN_HERE"}'></script>
<!-- End Cloudflare Web Analytics -->
```

To add this to GatsbyJS I made use the [Gatsby Server Rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/). My site did not have a gatsby-ssr.js, so I created the file in the root level of my project and put in the following code:

```javascript
import React from "react";
export function onRenderBody( { setPostBodyComponents } ) {
    setPostBodyComponents([
        <script 
        defer 
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "YOUR__TOKEN__HERE"}'></script>,
    ]);
}
```

In the future I might abstract this out into a plugin, particularly if Cloudflare expands on their Analytics offerings.