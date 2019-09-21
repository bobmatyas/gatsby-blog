import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gradient from "../components/gradient"

export default ({ data }) => {
  let post = data.markdownRemark

  return (
    <Layout>
      <SEO 
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />

      <Gradient />

      <div className="main__content">
        <div>
          <h1 className="blog__title">{post.frontmatter.title}</h1>
          <p className="blog__meta">{post.frontmatter.date}</p>
          <div className="blog__holder" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
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
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`