import React from "react"
// Utilities
import kebabCase from "lodash/kebabCase"
// Components
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    allMarkdownRemark: {
      group: any
    }
  }
}

const TagsPage: React.FC<Props> = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}: Props) => (
  <Layout>
    <div className="main__content">
      <h2 className="main__content__header">Tags</h2>{" "}
      <Seo title="Tags" description="Blog posts organized by topic." />
      <div>
        <Helmet title={title} />
        <div>
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
    </div>
  </Layout>
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
