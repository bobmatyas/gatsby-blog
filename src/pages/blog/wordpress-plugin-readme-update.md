---
title:  "Updating a WordPress Plugin's readme.txt File"
date:   "2022-11-05"
description: "A quick guide to updating a readme.txt file for a plugin published on WordPress.org"
meta: "./../../images/100822-wordpress_testing.png"
tag: 
    - wordpress
---

![wordpress logo](./../../images/100822-wordpress_testing.png)

For WordPress plugin developers, whenever a new version of WordPress is released, it is important to test your plugin for compatibility. After confirming everything works as expected, you should update the “Tested Up to” value in the `readme.txt` file to reflect this. Doing so helps build confidence and assures users that your plugin will work with the recent WordPress releases.

To update the `readme.txt` in a WordPress plugin, you can do the following:

Navigate to your local SVN directory or pull down the directory using:

`svn co URL_TO_SVN_REPO`

Update the `Tested up to` value in the `readme.txt` file located in `/trunk`

If you are using tagged releases, copy the `readme.txt` from `/trunk` to the release:

`cp readme.txt /tags/1.0`

You will want to replace `/tags/1.0` with the relevant release.

You can verify the changes by running `svn diff`

Assuming everything looks good, you can commit the changes to WordPress.org:

`svn ci -m "Updated Tested up to value to 6.1"`

Once that is done, changes should be published within a few minutes in the Plugin directory.