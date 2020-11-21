---
title:  "Optimizing Images in WordPress by Adding WebP Support"
date:   "2020-04-12"
description: "A guide to enabling WebP support for images in WordPress."
---

![Screenshot of WordPress Media Library](./../../images/wordpress-webp.jpg)

In terms of web performance, large and unoptimized images are one of the many pain points in optimizing a website. This isn’t a problem unique to WordPress, but some of its advantages – especially the ease at which non-technical folks can publish content – make it relatively susceptible to serving up pages with excessively large image sizes. Large image sizes can dramatically slow down websites. A classic example is the scenario where a 2000 pixel wide image is downloaded for a mobile device and resized to a width of 375 pixels. This is a fundamentally awful user experience that leads to slow page loads, higher bounce rates, and increased user frustration.

To address issues with image sizes, my default approach has always been to include an image optimization plugin on any WordPress site that I work on. I have tried out many over the years, but I generally have found [Smush](https://wordpress.org/plugins/wp-smushit/) to be the best. It can optimize new images on the fly or can be used to go through your uploads and compress existing images. Smush shaves quite a bit off of image size by resizing images, compressing them, and even offering an option to do lazy loading where images are loaded only when they visible on the screen.

## Going Further with WebP Support for WordPress

While Smush is a baseline for image optimization in WordPress, another step you can take is to serve images in so-called “nextgen” formats like WebP. While it varies from image to image, a 100k JPEG can be dramatically lower in size in WebP, often dropping down to as low as 20k depending on the image attributes. Unfortunately the free version of Smush doesn’t support this format, so another tool is necessary.

After searching through different options for WordPress, I settled on [WebP Converter for Media](https://wordpress.org/plugins/webp-converter-for-media). This plugin converts your WordPress sites images to WebP, automatically reducing the size of images and improving page load times. One of the features that I liked about this WebP plugin over other options is that it serves the image from the same URL and just does some magic with server headers to display the images in WebP format instead of the default. After installing the plugin, I immediately saw smaller image sizes when testing the site.

## WebP Issues with Apple iOS and Safari

This solution seemed great until I tested on an iPhone and discovered that none of the site’s images were loading. This was of course not expected. I had no issues on Android devices and desktop browsers were fine. This gave me enough to narrow down the issue as being specific to Safari on iOS and desktop. A little bit of research led me to learn that [Safari does not support WebP format](https://caniuse.com/?search=webp) (edit: this has been fixed on Safari 14). On iOS switching browsers didn’t make a difference as all browsers on iOS use the Safari rendering engine under the hood. Images failing on iOS and Safari isn’t an option on a website, so it was time to find a better solution.

## Image CDNs to the Rescue

After learning of the issue with WebP on iOS, I settled on another solution: [using a Content Delivery Network (CDN) for hosting images](https://web.dev/image-cdns/). Beyond serving WebP only to browsers that support it, adding a CDN comes with other benefits in terms of increasing page speed by serving images from servers closest to a user. There are many great options out there, but for this particular site I was looking for a free solution. I remembered that the Jetpack plugin for WordPress included a service called Photon serves images from a CDN. 

As it turns out Photon has been rebranded [Site Accelerator](https://jetpack.com/support/site-accelerator/) but it still ships as part of Jetpack. Enabling this within Jetpack grants access to an image CDN hosted by WordPress.com. The CDN automatically serves images as WebP if the visitor’s browser supports it. Given that this is a free service there are some limitations – it requires the Jetpack plugin, only images within pages and posts are served by the CDN, and the default cache period is forever, so changes will require a new file to be uploaded. That said the benefits in faster speed and reduced bandwidth probably outweigh the negatives, especially if you are already using Jetpack.

Overall, using Jetpack’s free CDN is a great no cost way to add WebP support to browser. Moreover its conditional usage of WebP based on what a visitor’s browser supports makes it a great choice for cross browser compatibility.