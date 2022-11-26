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
      <Seo title="Tags" description="Blog posts organized by topic." />
      <div>
        <Helmet title={title} />
        <div className="main">
          <h1 className="main__header">Tags</h1>{" "}
          <ul className="list-disc mx-5">
            {group.map((tag: any) => (
              <li className="py-2" key={tag.fieldValue}>
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
      group(field: { frontmatter: { tag: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`
