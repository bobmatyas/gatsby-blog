import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogLink from "../components/home-post-link"

interface Props {
  data: {
    allMarkdownRemark: any
  }
}

interface BlogPosts {
  node: {
    fields: {
      slug: string
    }
    frontmatter: {
      date: string
      title: string
      description: string
    }
    excerpt: string
  }
}

const Index: React.FC<Props> = ({ data }: Props) => {
  return (
    <Layout>
      <div className="main">
        <div className="my-10 pb-10 blog__post__list">
          {data.allMarkdownRemark.edges.map(({ node }: BlogPosts) => (
            <>
              <BlogLink
                link={node.fields.slug}
                date={node.frontmatter.date}
                title={node.frontmatter.title}
                key={node.frontmatter.date}
                description={node.frontmatter.description}
              />
            </>
          ))}
        </div>

        <Link to="/blog/2/" className="button my-10">
          Next Page →
        </Link>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(limit: 5, sort: { frontmatter: { date: DESC } }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MM/DD/YY")
            description
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default Index

export const Head = () => (
  <SEO
    title="Web Developer | Bob Matyas"
    description="Bob Matyas is a web developer in Grand Rapids, Michigan. He likes making designs come alive using HTML, CSS, and JavaScript"
  />
)
