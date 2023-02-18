---
title:  "Using the Gatsby Head API"
date:   "2023-01-06"
description: "Replacing React Helmet with Gatsby Head API"
twitterImage: "./../../images/gatsbyjs.png"
tag: 
    - gatsbyjs
---

![GatsbyJS](./../../images/gatsbyjs.png)

Since the start of this site, I have been using the popular [React Helmet](https://www.npmjs.com/package/react-helmet) package to handle the `<head>` tags on this site via [gatsby-plugin-react-helmet](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/). This has been the standard way to customize content in the document head, but as of Gatsby v4.19.0, Gatsby has implemented [a Head API](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/) that makes changing this a bit easier. They also claim:

> Compared to react-helmet or other similar solutions, Gatsby Head is easier to use, more performant, has a smaller bundle size, and supports the latest React features.

Switiching out between the two took about 30 minutes, but the time may vary depending on the size of a GatsbyJS project. For the most part, the transition is very straight forward. Rather than using something like an SEO component inside of each page component, you export a `Head` function in each page/template. You can easily refactor an existing SEO component for shared data and then change dynamic things (like titles or descriptions) when you call the component via props. 

The only major difference I ran into is that you can't declare the HTML `lang` attribute within an SEO component as you would with React Helmet. Instead, you have to add it to `gatsby-ssr.js` like:

```
exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "en" })
}
```

Overall, it's a quick win that as it seems rare these days to actually remove 2 JavaScript packages from a project.
