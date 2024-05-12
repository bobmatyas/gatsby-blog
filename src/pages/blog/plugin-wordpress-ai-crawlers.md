---
title: "A Plugin for Blocking AI Crawlers in WordPress"
date: "2024-05-12"
description: "I recently wrote a quick plugin to (hopefully) block AI crawlers in WordPress."
tag:
  - wordpress
---

Over the several months, the various large language models (LLMs) that power artificial intelligence (AI) tools like ChatGPT and Google’s Gemini have started to allow websites to opt-out from future crawling via `robots.txt`.*

I recently wrote a quick WordPress plugin to generate a `robots.txt` file that blocks the most well known of these crawlers. It is called, appropriately enough, [Block AI Crawlers](https://wordpress.org/plugins/block-ai-crawlers/). It's a simple install it and forget it plugin. There are currently no settings that need to be updated. Once it is activated, it starts working.

The big caveat is of course that it is up to the AI crawlers to respect these rules. I’m not sure that I trust companies that ingested most of the Internet to power their models to follow these directives, but the plugin has no adverse effect and maybe they’ll actually obey. 

You can grab [the plugin on WordPress.org](https://wordpress.org/plugins/block-ai-crawlers/). I’m going to do my best to add new crawlers as I learn about them. You can always add suggestions for crawlers to block on [the plugin's GitHub repository](https://github.com/bobmatyas/wp-block-ai-crawlers).

_* `robots.txt` is a file that provides directions to search engines and other bots. It's a standardized way of interacting with crawlers of all kinds._