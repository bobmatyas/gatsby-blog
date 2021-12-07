import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HcardPost from "../components/hcard-post"
import Gradient from "../components/gradient"
import styled from "styled-components"

const BlogPost = ({ data }) => {
  let post = data.markdownRemark

  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />

      <Gradient color="purple" />

      <div className="main__content">
        <article className="h-entry">
          <h2 className="blog__title p-name">{post.frontmatter.title}</h2>
          <HcardPost 
            slug={post.fields.slug} 
            date={post.frontmatter.date}  
          />
          <div className="blog__holder e-content" dangerouslySetInnerHTML={{ __html: post.html }} />

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
      fields {
        slug
      }
    }
  }
`

export default BlogPost; 