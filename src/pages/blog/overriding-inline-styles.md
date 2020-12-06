---
title:  "Overriding Inline Styles"
date:   "2020-01-20"
description: "A short bit about overriding inline styles in third party scripts."
---

At my day job, I end up spending a lot of time integrating third party scripts into client websites. Ideally, these scripts will offer important functionality in an efficient manner that adds value to both those who run the business and the customers who interact with their online offerings. I’m not sure that  is always the case, but nonetheless third party scripts are quite popular. 

In theory, it should work out fine and each script should have encapsulated functionality, styling, and performance that doesn’t interfere with other resources on the page. All-too-often it seems that this isn’t the case. Stepping away from the performance concerns and delays due to loading multiple third party resources from different hosts, a common issue is dealing with styling issues. Sometimes, it can be strangely fun to try to override these styles. I rather enjoy flexing my CSS muscles and getting the chance to write [descendant selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator), [sibling combinators](https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator), [child selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator), and other such shenanigans. It may not always be the prettiest code, but have no doubt – I’m going to change the background on that widget!

Unfortunately, in the land of third party integrations, things get messy – fast. It doesn’t take too long before CSS selectors and combinators don’t work and you find yourself digging through a  complicated mess of undocumented styles spread across multiple vendors, all of which are loading at different times. In such an environment, I find myself occasionally having to gravitate towards using !important at the end of my styles to make them stick. It’s definitely not something I enjoy doing, but when dealing with a bunch of CSS I have no control over, I don’t have much of a choice.

I’ve recently started to come across another scenario where scripts inject HTML onto the page with a bunch of inline styles in the form of:

```css
<div style="font-size: 12px; color: red;">
  <!-- third party widget here -->
</div>
```

Regular CSS rules won’t override this, but you can do it by targeting the style attribute:

```css
.div[style] { font-size: 20px !important; }
```

It’s a nice tip that I’ve found myself having to resort to recently. It solves some problems, but unfortunately can’t do anything if the inline styles are being implemented with !important.