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

  const pageTitle = `Blog Posts on: ${tag}`
  const pageDescription = `Blog posts on ${tag}`
  return (
    <Layout>
      <Seo title={pageTitle} description={pageDescription} />
      <div className="main">
        <h1 className="main__header">{tagHeader}</h1>
        <ul className="list-disc mx-5">
          {edges.map(({ node }: any) => {
            const { slug } = node.fields
            const { title } = node.frontmatter
            return (
              <li className="py-2" key={slug}>
                <Link to={slug}>{title}</Link>
              </li>
            )
          })}
          <li className="py-2">
            {" "}
            <Link to="/blog/tags">Browse all tags</Link>
          </li>
        </ul>
      </div>
    </Layout>
  )
}
export default Tags

export const pageQuery = graphql`
  query ($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { frontmatter: { date: DESC } }
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
