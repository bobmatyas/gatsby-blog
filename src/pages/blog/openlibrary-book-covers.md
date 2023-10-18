---
title: "JavaScript Bookmarklet for Book Cover Images"
date: "2023-10-18"
description: "A quick bookmarklet for getting book covers."
twitterImage: "./../../images/101823-openlibrary.png"
tag:
  - javascript
---

![OpenLibrary.org Logo](./../../images/101823-openlibrary.png)

While working on a project to track books, I wanted to find a quick way to get book covers. [OpenLibrary.org](https://openlibrary.org/) – a project to aimed at creating a complete digital library – has [a nice covers API](https://openlibrary.org/dev/docs/api/covers) that allows for this. They have an easy system where covers are always available via a predictable URL and no API authentication is required.

To make the process quicker, I made a quick JavaScript bookmarklet ([Github Gist](https://gist.github.com/bobmatyas/b6cbac1703af7d02a49f4e1697b28f6a)):

```javascript
javascript: (() => {
  const isbn = prompt("Enter the 9 or 13 Digit ISBN for the book")
  if (isbn != null) {
    const coverImage = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`
    navigator.clipboard.writeText(coverImage)
    alert(`${coverImage}\n\n Cover Image URL Copied to clipboard.`)
  }
})()
```

You can add it to your browser's bookmarks and it takes an ISBN and returns the URL for cover image and copies it to the clipboard for ease of use.
