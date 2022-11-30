---
title:  "Updating to Gatsby v5"
date:   "2022-11-29"
description: "A quick overview of my experience upgrading from GatsbyJS v4 to v5."
meta: "./../../images/gatsbyjs.png"
tag: 
    - gatsbyjs
---

![GatsbyJS](./../../images/gatsbyjs.png)

Over the past week or so, I upgraded this site to [GatsbyJS v5](https://www.gatsbyjs.com/blog/gatsby-5). I followed along with the upgrade document that explains [how to move from Gatsby v4 to v5](https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v4-to-v5/) and was able to get the site running on my local environment without serious issues.

However, when it came time to deploy, things crashed and burned once I tried to generate a build on Netlify. I hit an issue where the site wouldn’t build because of a dependency issue with [`gatsby-plugin-netlify`](https://github.com/netlify/gatsby-plugin-netlify). I got a helpful tip on how to [fix that issue](https://github.com/netlify/gatsby-plugin-netlify/issues/195#issuecomment-1325698268). I then tried queuing the build, and it failed again with an error in `@netlify/plugin-gatsby`. [Dealing with build errors](https://www.bobmatyas.com/blog/build-woes/) like these are one of my least favorite things about modern web development.

Ultimately, the easiest solution for me was to just move the project over to [Gatsby Cloud](https://www.gatsbyjs.com/products/cloud/). I now have the site configured so that it builds on Gatsby Cloud and then pushes the build over to Netlify. It was pretty seamless to set this up [following the docs](https://support.gatsbyjs.com/hc/en-us/articles/360052325174-Deploying-to-Netlify). Now hopefully I can look at implementing new functionality available in Gatsby 5. 