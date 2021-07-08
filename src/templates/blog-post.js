import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Gradient from "../components/gradient"
import styled from "styled-components"

const Meta = styled.time`
  color: #757575;
  display: block;
  font-weight: 400;
  margin: 0 0 25px;
  padding: 0;
`;

const BlogPost = ({ data }) => {
  let post = data.markdownRemark

  const dateFormat = (dateToFormat) => {
    const date = new Date(dateToFormat);
    const options = {year: 'numeric', month: 'long', day: 'numeric'}
    return date.toLocaleDateString('en-us', options);
  }

  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />

      <Gradient color="purple" />

      <div className="main__content">
        <article>
          <h2 className="blog__title">{post.frontmatter.title}</h2>
          <Meta dateTime={post.frontmatter.dateTime}>{dateFormat(post.frontmatter.date)}</Meta>
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