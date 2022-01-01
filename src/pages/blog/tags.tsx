import React from "react"
// Utilities
import kebabCase from "lodash/kebabCase"
// Components
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}: any) => (
  <>
    <Seo title="Tags" description="Blog posts organized by topic." />
    <Layout>
      <div>
        <Helmet title={title} />
        <div>
          <h1>Tags</h1>
          <ul>
            {group.map((tag: any) => (
              <li key={tag.fieldValue}>
                <Link to={`/blog/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  </>
)

export default TagsPage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tag) {
        fieldValue
        totalCount
      }
    }
  }
`
