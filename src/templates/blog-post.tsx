import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
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

      <div className="main py-2">
        <article className="h-entry">
          <h2 className="p-name text-slate-500 font-extrabold text-3xl mt-10">
            {post.frontmatter.title}
          </h2>
          <HcardPost slug={post.fields.slug} date={post.frontmatter.date} />
          {post.frontmatter.tag ? <PostTags tags={post.frontmatter.tag} /> : ""}
          <div
            className="prose lg:prose-xl"
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
