---
title:  "Build Woes"
date:   "2022-09-26"
description: "Random GatsbyJS build errors and thinking about moving to Astro.build."
meta: "./../../images/092622-build_woes.jpg"
tag: 
    - javascript
---

![photo of broken glass, or the state of my node_modules](./../../images/092622-build_woes.jpg)

Over the weekend, I intended to catch up on some blog posts and maybe update a few things on this site. Whenever I do this, I generally update the various Node packages used under the hood. The site runs on GatsbyJS, so I usually just check for outdated packages and then update them depending on what they are. When I’m lucky, this goes without a hitch and I can move on. I find that keeping the packages updated makes it easier if I have to make bigger changes down the line (such as a version bump).

However, this weekend I ran into a number of cryptic error messages and issues with build process. Eventually, I tracked it down to [an issue with Gatsby’s GraphQL dependencies](https://github.com/gatsbyjs/gatsby/issues/35212) and [the graphql-compose dependency](https://github.com/graphql-compose/graphql-compose/issues/374). I was getting errors like:

```
/node_modules/graphql-compose/lib/type/date.d.ts(2,25):
2:25 Type 'GraphQLScalarType' is not generic.
    1 | import { GraphQLScalarType } from '../graphql';
  > 2 | declare const _default: GraphQLScalarType<Date, string>;
      |                         ^
    3 | export default _default;
    4 | //# sourceMappingURL=date.d.ts.map
```

There were several of them and I wasn’t able to get the site to build. It turns out that the issue is the site’s use of TypeScript. Eventually, I was able to resolve it by [turning off type checking in declaration files](https://www.typescriptlang.org/tsconfig#skipLibCheck) by adding the line `"skipLibCheck": true` to the `tsconfig.json` file. This is a small enough site that I don’t imagine it will have an impact.

Reading over GitHub issues, it sounds like this particular set of dependency woes should hopefully be resolved with [Gatsby v5](https://github.com/gatsbyjs/gatsby/discussions/36609) later this fall. While I hope to see this fixed, I’m starting to think about moving away from Gatsby. When I built this site 3 years ago, Gatsby was a nice way for me to bolster my React experience and develop a simple portfolio site I learned a lot from the process and over the years I’ve moved the site from v2 to v4 and made a few changes, the biggest of which was moving to TypeScript. I’m at best an infrequent blogger, but it seems like whenever I have the motivation to post something, there is a chance I’ll run into trouble (another [frustrating issue earlier this year](https://github.com/gatsbyjs/gatsby/issues/33738)).

This site is long overdue for a redesign and a shift in how I use it. Increasingly, I want to write a blog post and move on and not have to deal with managing dependencies and build issues. In the past, I have looked at [11ty](https://www.11ty.dev/)  as a possible alternative, but ultimately I don’t want to deal with another templating language. Lately, I’ve been looking fondly at [Astro](https://astro.build). Astro would let me write code using React components while also [being HTML-first](https://astro.build/blog/introducing-astro/) in that it only ships JavaScript when needed by a particular component. So in the case of this site, it would mostly be a final build without JS.

Of course, it’s also classic developer thinking to believe that an architecture change is the solution to your woes. But then again, that is the advantage of having site content primarily in [Markdown](https://www.markdownguide.org/getting-started/) and embracing the ideas of personal website as a [digital garden](https://maggieappleton.com/garden-history) and a place for expermentation.