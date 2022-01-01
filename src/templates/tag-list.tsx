import React from "react"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link, graphql } from "gatsby"

const Tags: React.FC = ({ pageContext, data }: any) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  const pageTitle = `Tag: ${tag}`
  const pageDescription = `Blog posts tagged with ${tag}.`
  return (
    <Layout>
      <Seo title={pageTitle} description={pageDescription} />
      <div className="main__content">
        <h2 className="main__content__header">{tagHeader}</h2>
        <ul>
          {edges.map(({ node }: any) => {
            const { slug } = node.fields
            const { title } = node.frontmatter
            return (
              <li key={slug}>
                <Link to={slug}>{title}</Link>
              </li>
            )
          })}
        </ul>
        {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
        <p>
          <Link to="/blog/tags">All tags</Link>
        </p>
      </div>
    </Layout>
  )
}
export default Tags

export const pageQuery = graphql`
  query ($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tag: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
