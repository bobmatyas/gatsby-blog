import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gradient from "../components/gradient"

const BlogPost = ({ data }) => {
  let post = data.markdownRemark

  const dateFormat = (dateToFormat) => {
    const date = new Date(dateToFormat);
    const options = {year: 'numeric', month: 'long', day: 'numeric'}
    return date.toLocaleDateString('en-us', options);
  }

  return (
    <Layout>
      <SEO 
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />

      <Gradient />

      <div className="main__content">
        <article>
          <h1 className="blog__title">{post.frontmatter.title}</h1>
          <time dateTime={post.frontmatter.dateTime} className="blog__meta">{dateFormat(post.frontmatter.date)}</time>
          <div className="blog__holder" dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        date
      }
    }
  }
`

export default BlogPost; 