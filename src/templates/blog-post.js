import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HcardPost from "../components/hcard-post"
import Gradient from "../components/gradient"
import styled from "styled-components"

const PostContent = styled.div`
  background-color: #fff;
  border: 1px solid var(--background-border);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  color: var(--body-text-color);
  padding: 0 5% 5% 5%;
  box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14),0 1px 10px 0 rgba(0,0,0,0.12),0 2px 4px -1px
  rgba(0,0,0,0.3);
`;

const BlogPost = ({ data }) => {
  let post = data.markdownRemark

  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />

      <Gradient color="purple" />

      <PostContent>
        <article className="h-entry">
          <h2 className="blog__title p-name">{post.frontmatter.title}</h2>
          <HcardPost 
            slug={post.fields.slug} 
            date={post.frontmatter.date}  
          />
          <div className="blog__holder e-content" dangerouslySetInnerHTML={{ __html: post.html }} />

        </article>
      </PostContent>
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