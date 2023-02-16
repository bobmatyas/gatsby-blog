import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

interface SEOProps {
  description?: string
  image?: string
  seoImage?: string
  pathname?: string
  title: string
  article?: boolean
  children?: any
}

export const SEO = ({
  title,
  description,
  pathname,
  article,
  seoImage,
  children,
}: SEOProps) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata()

  let socialImage: string
  if (seoImage) {
    socialImage = `${siteUrl}${seoImage}`
  } else {
    socialImage = image
  }

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${socialImage}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      <link
        rel="alternate"
        type="application/rss+xml"
        href="https://www.bobmatyas.com/rss.xml"
      />
      <link
        rel="webmention"
        href="https://webmention.io/www.bobmatyas.com/webmention"
      />
      <link
        rel="pingback"
        href="https://webmention.io/www.bobmatyas.com/xmlrpc"
      />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌸</text></svg>"
      ></link>
      {children}
    </>
  )
}

export default SEO
