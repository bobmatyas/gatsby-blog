import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gradient from "../components/gradient"

export default ({ data }) => {
  return (
  <Layout>
    
    <SEO 
      title="Blog"
      description="Blog posts from Bob Matyas, a web developer in Grand Rapids, Michigan"
    />
    
    <Gradient color="blue" />
    
    <div className="main__content">


    <div>
    <h2 className="main__content__header">Blog</h2>

    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}>
                <h3
            >
              {node.frontmatter.title}{" "}
              <span
              >
                — {node.frontmatter.date}
              </span>
            </h3>
            </Link>
            <p>{node.frontmatter.description}</p>
          </div>
        ))}
      </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
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