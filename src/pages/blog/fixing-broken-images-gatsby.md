---
title:  "Fixing Broken Images in Gatsby"
date:   "2019-11-15"
description: "Rebuilding the cache in Gatsby to fix broken images."
---

A little over a month ago, I moved this web site to a new platform using [GatsbyJS](https://www.gatsbyjs.org/). For the most, it’s been an awesome switch! Gastby allows to me to write in React and generates a highly optimized production build that can be hosted on any number of different static hosts. It’s a great setup and in a lot of ways exemplifies the power of [the JAMstack](https://jamstack.wtf/).

However, there have been a few small headaches along the way. One of which has been GraphQL, which I had no prior experience with. [Gatsby relies on GraphQL](https://www.gatsbyjs.org/docs/why-gatsby-uses-graphql/) to generate much of the content. For example, [images](https://www.gatsbyjs.org/docs/working-with-images/) are queried using GraphQL. Thankfully, the docs are pretty easy to follow and within a reasonable amount of time I was able to setup a page that auto-served images in WEBP format to compatible browsers, lazy loaded them, and blurred them up to high quality once they come into the view port – all of which you can get out of the box. These performance-enhancing features were one of the main reasons I chose Gatsby, so it was exciting to get it working without too much difficulty.

Still, as I was developing the site, I had an issue where if I changed one of the images the new image wouldn’t load in development mode. After lots of playing around and double-checking to make sure that yes, I did save the image in the correct spot, I was at a loss. Especially when seemingly by magic the next day the images were loading as expected.

As I thought about it more, I realized that the images seemed to be cached somehow and that the cache was not being rebuilt when the local image files changed. There had to be a way to delete that cache and rebuild it – thereby fixing the broken images. A few minutes of searching and I came across the command:

```shell
gatsby clean
```

The docs described it as “a last resort when your local project seems to have issues or content does not seem to be refreshing” – which definitely described my situation. The command deleted the “.cache” and “public” directories and the next time I ran the Gatsby in development mode, the broken images were fixed!
