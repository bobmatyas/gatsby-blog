---
title: "Auto-Posting to Mastodon via IFTTT"
date: "2023-07-09"
description: "A guide to auto-sharing content from your website to Mastodon."
twitterImage: "./../../images/070923-mastodon.jpg"
tag:
  - wordpress
---

![Mastodon Image](./../../images/070923-mastodon.jpg)

In the past, auto-posting to Twitter was an easy low-effort way to increase the visibility of content published on your own website. However, in recent months, Twitter has turned off this capability by [restricting access to its API](https://techcrunch.com/2023/02/01/twitter-to-end-free-access-to-its-api/).

This – along with the general way in which Twitter has been declining since Elon Musk’s purchase – has prompted many to either abandon Twitter altogether or supplement their Twitter usage by [joining Mastodon](https://lifehacker.com/a-beginner-s-guide-to-mastodon-1828503235). If you previously auto-posted content to Twitter, auto-posting to Mastodon can be a way to increase traffic to your site.

Depending on the platform you use, there are different ways to do this. For example, if you run WordPress, you could add a plugin to handle auto-posting to Mastodon. However, you can also do this taking your site’s [RSS feed](https://aboutfeeds.com/) and using it to auto-post to Mastodon via the automation tool [IFTTT (If This Then That)](https://ifttt.com/). This doesn’t require any code or additional dependencies and works with any publishing platform that uses RSS.

### Create an App on Mastodon

1. Go to “Settings > Development”
2. Click on “Add an App”
3. Give the app a name, i.e. “RSS to Mastodon”
4. Under “Scopes” remove the default global permissions and add “write:statuses”
5. Click “Save”

You will then have a new app with client key, client secret, and an access token. You will need the access token in the next section, so keep the window open.

### Create an App on IFTTT.com

1. Go to [“Create” an applet](https://ifttt.com/create)
2. Click “Add” on “If This” and under “Choose a Service” search for “RSS Feed” and click on that
3. On the next screen – “Choose a Trigger” – select “New Feed Item”
4. Add the address of the RSS feed you want to auto-post from to the “Feed URL” field.
5. Once you do that click “Add” next to “Then That”
6. Search for “webhooks” and click on that
7. Select “Make a Web Request” and click on “Connect” on the next screen
8. On the “Complete Action Fields” screen, add the address:
   `https://INSTANCE_URL_HERE/api/v1/statuses` and replace `INSTANCE_URL_HERE` with the address of your instance, i.e., mastodon.online
9. For the “Method”, select “Post”
10. For the “Content Type”, select `application/x-www-form-URLencoded`
11. For the “Additional Headers” field, add `Authorization: Bearer YOUR_MASTODON_ACCESS_TOKEN` and replace `YOUR_MASTODON_ACCESS_TOKEN` with the access token that you created in the first half of the instructions
12. For the “Body” field, add `status={{EntryTitle}} {{EntryUrl}}`
13. Click “Create Action”
14. On the next screen, click “Continue”
15. Edit the “Applet Title” to be something descriptive like “RSS to Mastodon”
16. I recommend turning on “Receive notifications when applet runs”
17. Click “Finish”

Now, next time you publish to your website, your Mastodon account will automatically post a link to your new post.
