---
title:  "WordPress Block Theme Resources"
date:   "2022-07-22"
description: "A short guide to configuring TypeScript in GatsbyJS."
meta: "./../../images/gutenberg-featured.png"
tag: 
    - wordpress
---

![Gutenberg logo](./../../images/gutenberg-featured.png)

Since the release of [WordPress v5.9](https://wordpress.org/news/2022/01/josephine/), Full Site Editing has been included in WordPress core. Full Site Editing -- when used with a compatible theme such as the default Twenty Twenty Two theme -- allows users to edit all of the site via the Site Editor. This is a huge improvement as it means that features that perhaps were locked away behind menus in the customizer or in PHP template files can now be changed without code.

To take advantage of this, you need to have a theme that is compatible with Full Site Editing. There are [a number available on WordPress.org](https://wordpress.org/themes/tags/full-site-editing/). For folks like me who have experience developing so-called "classic WordPress" themes, there is a lot to learn regarding block themes and how to build them. 

I've started reading up on this and am noting some resources that have been useful for helping me to understand more about the new paradigm.

## Overviews of Block themes

These articles were helpful for giving me a broad overview of block themes:

- [A new era of WordPress themes is finally here](https://richtabor.com/a-new-era/)
- [A Deep Introduction to WordPress Block Themes](https://css-tricks.com/a-deep-introduction-to-wordpress-block-themes/)
- [Block Theme Building Tips](https://themeshaper.com/2022/02/28/block-theme-building-tips/)

## WordPress.org Docs

- [Block Themes](https://developer.wordpress.org/themes/block-themes/)
- [Block Theme Overview](https://developer.wordpress.org/block-editor/how-to-guides/themes/block-theme-overview/)
- [Global Settings & Styles (theme.json)](https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-json/)

## Understanding "theme.json"

One of the exciting parts about block theme compatible with full site editing is that you can use a `theme.json` file to set styles that would have required manually creating a stylesheet before. There is a lot of promise to this approach and the following articles helped me understand this a bit more.

- [How to set up theme.json in WordPress themes](https://aurooba.com/set-up-theme-json-wordpress-themes/)

### Standardizing theme.json

- [Standardizing Theme.json Color Slugs in WordPress Block Themes](https://richtabor.com/standardizing-theme-json-colors/)
- [Standardizing Theme.json Font Sizes in WordPress Block Themes](https://richtabor.com/standardizing-theme-json-font-sizes/)
- [Standardizing Theme.json Site Spacing in WordPress Block Themes](https://richtabor.com/standardizing-theme-json-spacing/)

### Style Variations 

- [How to Create Style Variations in WordPress 6.0 Block Themes ](https://css-tricks.com/creating-style-variations-in-wordpress-block-themes/)
- [How to add style variations to WordPress Block Themes](https://richtabor.com/wordpress-style-variations/)