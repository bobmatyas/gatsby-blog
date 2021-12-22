import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HcardPost from "../components/hcard-post"
import styled from "styled-components"

const BlogHolder = styled.div`
  a:link,
  a:visited,
  a:hover,
  a:active {
    color: #845ec2;
  }
  a:link,
  a:visited {
    text-decoration: underline;
  }
  a:hover,
  a:active {
    text-decoration: none;
  }
`

const BlogPostTitle = styled.h2`
  margin-bottom: 10px;
`

interface Post {
  data: {
    markdownRemark: {
      html: any
      frontmatter: {
        date: string
        title: string
        description: string
      }
      fields: {
        slug: string
      }
    }
  }
}

const BlogPost = ({ data }: Post) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />

      <article className="h-entry">
        <BlogPostTitle className="p-name">
          {post.frontmatter.title}
        </BlogPostTitle>
        <HcardPost slug={post.fields.slug} date={post.frontmatter.date} />
        <BlogHolder
          className="e-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
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

export default BlogPost
