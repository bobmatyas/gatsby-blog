---
title:  "Exporting WordPress to Markdown for GatsbyJS"
date:   "2020-02-16"
description: "A look into different options for exporting a WordPress blog to Markdown / GatsbyJS."
---

I recently had the opportunity to work on a project that used WordPress but was a good candidate for moving over to [Gatsby](https://www.gatsbyjs.org/ ). I had a positive experience building this blog using Gatsby and enjoyed the ability to write in React and generate a super fast and secure static website. I was looking forward to using Gatsby on a bigger project and eagerly started the migration process.

The first step was moving the WordPress content into Markdown, which could then be imported into Gatsby. This proved to be harder than expected and it was a struggle to get the content exported in a way that was usable. The site made extensive use of posts, pages, [WordPress Custom Fields](https://wordpress.org/support/article/custom-fields/ ), and generated SEO content using [the Yoast SEO Plugin](https://yoast.com/wordpress/plugins/seo). It was important that exports included all of this. 

After doing some research, there were a few WordPress plugins that seemed like they might do the trick. They were all designed to move from WordPress to Jekyll, which is another static site generator. Nevertheless, the resulting Markdown files would have been a good starting point and I could have used them with Gatsby. 

I tried:

* [Jekyll Exporter](https://wordpress.org/plugins/jekyll-exporter/) - This hasn’t been updated for a while and the reviews were pretty mixed, but I decided to give it a try. It timed out on my server and didn’t work.
* [WordPress2Jekyll](https://wordpress.org/plugins/wp2jekyll/) - I had similar results as I did with Jekyll Exporter, the plugin timed out and didn’t work.

After being unsuccessful with WordPress plugins, I did some more research and came across a few other options. I tried an NPM package called [Wordpress-Export-to-Markdown](https://www.npmjs.com/package/wordpress-export-to-markdown) and a similar script [Wordpress-to-Markdown](https://github.com/Swizec/wordpress-to-markdown ). Both of these used Node to loop over a WordPress XML export. It sounded promising, but unfortunately both only worked with posts. The site I was trying to export had pages that needed to be moved so neither of these options worked. I probably could have adjusted the code to grab the pages as well, but they both limited the front matter that was exported so I kept looking.

Another option that got some positive mention online is [ExitWP](https://github.com/thomasf/exitwp). Like the NPM packages, it runs on a WordPress XML export but uses Python instead. I fired up my Linux box and gave it a go. ExitWP converted the pages to Markdown, but it didn’t create the required front matter. I saw a few mentions where folks who didn’t have success with ExitWP tried a fork called [ExitWP for Hugo](https://github.com/wooni005/exitwp-for-hugo) but it had the same limitations and didn’t work for my use case.

As a last ditch effort before writing something on my own or modifying one of the existing options, I decided to check the WordPress plugin directory one more time. I came across a plugin called [WP Gatsby Markdown Exporter](https://wordpress.org/plugins/wp-gatsby-markdown-exporter/). It was pretty new and had no reviews and limited installations, but seemed intriguing. It turns out it is made by the folks who do [TinaCMS](https://tinacms.org/) which was a good sign. 

I installed it in WordPress, navigated through, and on first run it accomplished nearly all of what I wanted! It exported the posts and pages and got the majority of the Custom Fields on the first pass. I was able to tweak the settings and when I ran it again I was able to get everything I needed, including the Yoast SEO fields for each post and page.

I definitely recommend using WP Gatsby Markdown Exporter for moving from WordPress to Gatsby. It grabs the most metadata for posts/pages and is the most configurable option out there at this time. 