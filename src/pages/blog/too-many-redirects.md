---
title:  "Fixing ERR_TOO_MANY_REDIRECTS in WordPress with Cloudflare"
date:   "2021-08-15"
description: "A guide to fixing the ERR_TOO_MANY_REDIRECTS issue on a WordPress site that is using Cloudflare."
---

![Screenshot of the ERR_TOO_MANY_REDIRECTS in WordPress](./../../images/too-many-redirects.png)

A common error in WordPress is the “Too Many Redirects” error message “ERR_TOO_MANY_REDIRECTS.” The error is calling out a redirect loop wherein something on the site (such as plugins) or on the server (such as the .htaccess file) is causing a redirection loop. The solution for this is often to disable redirection plugins or to remove redirection code from the .htaccess file. Once you have done this, it’s a good idea to clear your browser cache and any site caches.

The above is the standard recommendation for clearing the “ERR_TOO_MANY_REDIRECTS” message. However, another cause that is often overlooked is when people put a CDN – such as Cloudflare – in front of the WordPress site. If you are using Cloudflare, the error triggers when you have incorrect SSL options setup. If your web server is setup to redirect all insecure requests to HTTPS (which it should be), you will get this error if Cloudflare is setup using “Flexible” SSL encryption. 

To fix the error, you will need to change the SSL encryption from “Flexible” to “Full” or “Full (Strict).” With the “Flexible” setting, Cloudflare sends traffic to your web server unencrypted. If you are redirecting HTTP to HTTPS this causes the traffic from Cloudflare to redirect, which in turn causes a redirection loop and the “ERR_TOO_MANY_REDIRECTS” error in WordPress. You can fix this by changing the SSL setting to “Full” which tells Cloudflare to send encrypted traffic to your web server.

After adjusting this, clearing your browser cache and emptying the Cloudflare cache should be enough to get your WordPress site back online. 
