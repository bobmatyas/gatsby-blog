---
title:  "Under Construction"
date:   "2021-12-14"
description: "A summary of recent changes on this site."
---

![Under Construction Image](./../../images/under-construction.jpg)

I have slowly been making some long overdue changes to this site. I’m planning to do a full redesign at some point in the (hopefully) near future, but for now I’m making changes to the underlying infrastructure that will make it easier.

### Embracing the IndieWeb

I have been interested in the idea of [the IndieWeb](https://indieweb.org/) for quite a while as an alternative to the corporate centered nature of the contemporary web:

> The IndieWeb is a community of individual personal websites, connected by simple standards, based on the principles of owning your domain, using it as your primary identity, to publish on your own site (optionally syndicate elsewhere), and own your data.

I’m working on incorporating more IndieWeb features as I work towards redesigning and re-conceptualizing this site. So far, I have added Microformats (marked up my posts and added an [h-card](https://microformats.org/wiki/h-card) to the homepage) and web sign in. A helpful tool for this has been [Indiewebify.me](https://indiewebify.me/).

In the future, I’m planning to implement Webmentions and maybe even join a [webring](https://en.wikipedia.org/wiki/Webring) or two.

### Updated to Gatsby v4

It seems like not that long ago I [upgraded from Gatsby v2 to v3](https://www.bobmatyas.com/blog/updating-gatsby-v2-v3/) and now I’m updating to Gatsby v4. The change was pretty seamless. I upgraded all of my dependencies to the latest versions and then upgraded Gatsby to the latest version of 3.x. Once I did that, I updated to v4 and had no issues. The only thing I understood to be an issue is that I need to use (for now) a beta version of [the Gatsby Netlify plugin](https://github.com/netlify/netlify-plugin-gatsby#install-the-gatsby-plugin). That said, I haven’t run into any issues. 

While not specifically related to Gatsby v4, I recently had occasion to use [Gatsby StaticImage](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#staticimage) which was a lot easier than querying GraphQL for an image.

### Removed SASS Dependency

When I originally launched this site, it was using SASS to store a handful of color variables. I wasn’t using SASS for anything else. Additionally, the styles were set at the global level. I removed the SASS dependency and switched to [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) which is more consistent with how I prefer to build things these days. Additionally, I moved the styles into the individual components using [Styled Components](https://styled-components.com/). This will make a redesign easier as I don’t need to keep track of global styles and figure out what is okay to delete and what isn’t.