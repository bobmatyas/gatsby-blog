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

  blockquote {
    margin-left: 2.5rem;
  }

  ol,
  ul {
    margin-left: 2.75rem;
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
        meta?: any
      }
      fields: {
        slug: string
      }
    }
    site: {
      siteMetadata: {
        defaultImage: string
      }
    }
  }
}

const BlogPost: React.FC<Post> = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={
          post.frontmatter.meta
            ? post.frontmatter.meta.childrenImageSharp[0].original.src
            : data.site.siteMetadata.defaultImage
        }
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
        meta {
          childrenImageSharp {
            original {
              src
            }
          }
        }
      }
      fields {
        slug
      }
    }
    site {
      siteMetadata {
        defaultImage: image
      }
    }
  }
`

export default BlogPost
