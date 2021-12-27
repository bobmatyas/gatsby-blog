---
title:  "How to Turn Off Outdated TLS Versions on Cloudflare"
date:   "2021-12-26"
description: "A guide to disabling outdated TLS versions when using Cloudflare."
---

![](./../../images/cloudflare-ssl.jpg)

If your website uses Cloudflare and you run it through an SSL certificate test such as the one provided by [SSL Labs](https://ssllabs.com/) you likely have seen that your grade is capped at “B”. This is due to the warning:

> This server supports TLS 1.0 and TLS 1.1. Grade capped to B

The solution is to disable support for TLS v1.0 and TLS v1.1. These protocols are deprecated (https://datatracker.ietf.org/doc/rfc8996/) and should not be used in production:

> These versions lack support for current and recommended cryptographic algorithms and mechanisms, and various government and industry profiles of applications using TLS now mandate avoiding these old TLS versions. TLS version 1.2 became the recommended version for IETF protocols in 2008 (subsequently being obsoleted by TLS version 1.3 in 2018), providing sufficient time to transition away from older versions. Removing support for older versions from implementations reduces the attack surface, reduces opportunity for misconfiguration, and streamlines library and product maintenance.

## Disabling Outdated TLS Versions on Cloudflare

With Cloudflare, it is easy to fix this issue. By default, Cloudflare supports older TLS versions. However, you can change this in your Cloudflare settings:

1. Open your domain
2. Go to “SSL/TLS”
3. Navigate to “Edge Certificates”
4. Scroll down to “Minimum TLS Version”
5. Set this to “TLS 1.2”

Cloudflare [does not recommend](https://developers.cloudflare.com/ssl/edge-certificates/additional-options/minimum-tls) setting the minimum version higher than TLS 1.2 as it will likely cause issues with search engine crawlers and some web browsers.

Once you have changed the TLS version, you can re-test with SSL Labs and your grade will no longer be capped. 