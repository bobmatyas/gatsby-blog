---
title:  "Updating from Gatsby v2 to v3"
date:   "2021-03-20"
description: "A quick overview of how I updated from Gatsby v2 to v3."
---

![GatsbyJS](./../../images/gatsbyjs.png)

I recently updated my site from Gatsby v2 to v3. For the most part, it was a surprisingly painless transition. I followed along with [the guide in the Gatsby docs](https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/) which got me most of the way there, but there were a few issues not covered in the docs that I had to address.

I began by updating Gatsby to the latest version which took me from 2.x to 3. I ran this command:

```
npm install gatsby@latest
```

Next, I updated my dependencies. I ran:

```
npm outdated
```

and then installed the latest version of every plugin using:

```
npm install plugin-name@latest
```

Once I did this I had a few issues, so I decided to nuke the node_modules folder and rebuild it with a fresh install:

```
rm -rf node_modules
npm install
```

This reinstalled all the Node modules and fixed a couple of strange errors that were happening.

Once that was done, I got a number of error messages around exports and arrow functions:

```
9:1  warning  Anonymous arrow functions cause Fast Refresh to not preserve local component state.

       Please add a name to your function, for example:

       Before:
       export default () => {}

       After:
       const Named = () => {}
       export default Named;

no-anonymous-exports-page-templates

9:1  warning  Assign arrow function to a variable before exporting as module default
```

This was an easy fix to reflect some updated coding practices in components that hadn’t been touched in over a year. 

Once I made all of the changes, everything built fine locally. However, moving it to my host I got errors with an out-of-date Node version which was causing the build to fail. Previously I was using Node v10.x whereas Gatsby v3 requires Node v12.x. This was a pretty easy fix and I just needed to change the Node version being used to build the site. For folks hosting on Netlify, you can do that by [setting an environmental variable](https://docs.netlify.com/configure-builds/manage-dependencies/) or adding a file to your repo.

From my perspective the most exciting [changes in v3](https://www.gatsbyjs.com/docs/reference/release-notes/v3.0/) are incremental builds and a new and more performant image plugin. I’m hoping that it is a bit easier to use as images had been a pain point in early versions of Gatsby.