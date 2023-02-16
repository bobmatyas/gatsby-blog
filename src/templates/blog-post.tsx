import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HcardPost from "../components/hcard-post"
import PostTags from "../components/post-tags"

interface Post {
  data: {
    markdownRemark: {
      html: any
      frontmatter: {
        date: string
        title: string
        description: string
        meta?: any
        tag?: any
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

  console.log(data.markdownRemark.frontmatter.meta.childrenImageSharp)
  return (
    <Layout>
      <div className="main py-2">
        <article className="h-entry mt-10">
          {post.frontmatter.tag ? <PostTags tags={post.frontmatter.tag} /> : ""}
          <h1 className="p-name text-slate-800 font-extrabold text-2xl md:text-6xl mt-5">
            {post.frontmatter.title}
          </h1>
          <HcardPost slug={post.fields.slug} date={post.frontmatter.date} />
          <div
            className="e-content mt-10 prose md:prose-lg lg:prose-xl prose-slate font-serif"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
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
        meta {
          childrenImageSharp {
            original {
              src
            }
          }
        }
        tag
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

export const Head: React.FC<Post> = ({ data }) => (
  <SEO
    title={data.markdownRemark.frontmatter.title}
    description={data.markdownRemark.frontmatter.description}
    seoImage={
      data.markdownRemark.frontmatter.meta.childrenImageSharp[0].original.src
    }
  />
)
