import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Gradient from "../components/gradient"

const Blog = ({ data }) => {
  return (
  <Layout>
    
    <Seo 
      title="Blog"
      description="Blog posts from Bob Matyas, a web developer in Grand Rapids, Michigan"
    />
    
    <Gradient color="purple" />
    
    <div className="main__content">

    <h2 className="main__content__header">Blog</h2>

        { data.allMarkdownRemark.edges.map(({ node }) => (
          <article className="blog__card h-entry" key={node.id}>
            <Link
              to={node.fields.slug} className="u-uid u-url">

              <p className="blog__card__date">
                {node.frontmatter.date}
              </p>
              
              <h3 className="blog__card__header p-name">
                {node.frontmatter.title}{" "}
              </h3>
            
              <p className="blog__card__text p-summary">
                {node.frontmatter.description}
              </p>
              
            </Link>
          </article>
        ))}
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

export default Blog; 