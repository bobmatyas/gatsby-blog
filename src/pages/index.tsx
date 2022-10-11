import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
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
      <Seo
        title="Web Developer"
        description="Bob Matyas is a web developer in Grand Rapids, Michigan. He likes making designs come alive using HTML, CSS, and JavaScript"
      />

      <div className="main">
        <ul className="my-10 pb-10 home__post__list">
          {data.allMarkdownRemark.edges.map(({ node }: BlogPosts) => (
            <BlogLink
              link={node.fields.slug}
              date={node.frontmatter.date}
              title={node.frontmatter.title}
              key={node.frontmatter.date}
            />
          ))}
        </ul>

        <Link to="/blog/2/" className="button my-10">
          Next{" "}
        </Link>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
