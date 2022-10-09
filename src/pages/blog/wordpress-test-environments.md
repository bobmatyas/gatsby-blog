---
title:  "Options for WordPress Test Environments"
date:   "2022-10-08"
description: "An overview of options for creating WordPress test environments."
meta: "./../../images/100822-wordpress_testing.png"
tag: 
    - wordpress
---

![photo of broken glass, or the state of my node_modules](./../../images/100822-wordpress_testing.png)

When doing WordPress development work, having a test environment (or a few) is a must. Whether it is for evaluating a plugin, developing a theme, or some other type of work, it is imperative to have a place to test. These are my favorites:

## Staging Environments

If you are working on a production WordPress website, having a staging site – essentially a mirror image of your live site – is essential. This allows you to test and develop using the same WordPress environment. There are [a few staging plugins](https://wordpress.org/plugins/search/staging/) that can help with this in the WordPress plugin directory . However, I generally find that doing this at the hosting level is the best choice. In my experience, this is less prone to errors and is generally faster. Additionally, some WordPress hosts will have tools that allow you to easily push the changes from staging to production.

## Local 

[Local](https://localwp.com/) bills itself as “an effortless way to develop WordPress sites locally” and that statement that rings true. Compared to other solutions I have used over the years, Local is the easiest  to get up and running. Once the app is installed, you can have fully functioning WordPress installations accessible from your computer. This works great as you can edit files on your machine and develop in a way that tends to be faster than relying on a development server. You can also easily swap PHP versions and switch web servers (nginx or Apache).

## TasteWP

[TasteWP](https://tastewp.com/) is a tool that allows you to spin up short-lived WordPress instances. You can launch  instances that expire after 2 days without needing a login or you can extend that up to 7 days with a login. The service creates WordPress installs within seconds that you can then use for testing as it allows you to install WordPress plugins, themes, and change PHP versions. You can also change the WordPress version which is great if you need to test on an older version of WordPress. To speed things up even further, [you can use URL parameters](https://tastewp.com/blog/use-links-to-spin-up-a-site/) to customize the installations with specific plugins pre-installed from WordPress.org.

## InstaWP

[InstaWP](https://instawp.com/) is another tool that allows you to quickly setup WordPress sites. It lets you configure the WordPress version, PHP version, and whether it is a multisite or standard WordPress installation. Sites launch quickly and once setup, you can add plugins and themes. If you create an account, sites expire in 48 hours otherwise without an account they expire in 7 hours. 

## Adding Test Content

When I’m not working from a cloned site and need to add sample content, I like to use [the Theme Test Data](https://github.com/WPTT/theme-test-data) from the WordPress themes project. You can import the XML file into WordPress and it adds a number of posts and pages. I find that having actual posts and pages gives a more realistic experience when testing. If I’m testing something related to blocks (such as a block theme), I also like to add a page with [this Gutenberg Style Guide](https://gist.github.com/colorful-tones/2e37d2a33ca426fc6ed0e67f70cdc2df). 