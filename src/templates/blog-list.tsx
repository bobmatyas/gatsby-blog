import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

interface Props {
  data: any
  pageContext: any
}

interface BlogPosts {
  node: {
    fields: {
      slug: string
    }
    frontmatter: {
      title: string
      date: string
      description: string
    }
  }
}

export default class BlogList extends React.Component<Props> {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst: boolean = currentPage === 1
    const isLast: boolean = currentPage === numPages
    const prevPage: string =
      currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
    const nextPage: string = (currentPage + 1).toString()
    const prevPageLink: string = `/blog/${prevPage}`
    const nextPageLink: string = `/blog/${nextPage}`
    return (
      <Layout>
        <div className="main">
          <h2 className="main__header">Blog</h2>

          <div className="blog__post__list">
            {posts.map(({ node }: BlogPosts) => (
              <article
                className="h-entry py-10 border-t-2 border-stone-300 m-0 shadow-none h-entry leading-loose"
                key={node.fields.slug}
              >
                <h3>
                  <Link
                    to={node.fields.slug}
                    className="u-uid u-url text-purple-500 no-underline hover:underline decoration-4 underline-offset-8 "
                  >
                    <span className="dt-published font-sans text-lg font-bold">
                      {node.frontmatter.date}
                    </span>
                    <span className="text-lg font-bold font-sans">:</span>
                    <br />
                    <span className="p-name font-sans text-3xl font-extrabold">
                      {node.frontmatter.title}{" "}
                    </span>
                  </Link>
                </h3>

                <p className="text-lg p-summary no-underline text-gray-600 mt-5">
                  {node.frontmatter.description}
                </p>
              </article>
            ))}
          </div>

          <ul className="md:flex md:justify-between md:flex-row">
            {!isFirst && (
              <li className="my-10 pt-5">
                <Link to={prevPageLink} rel="prev" className="button">
                  ← Previous
                </Link>
              </li>
            )}
            {!isLast && (
              <li className="my-10 pt-5">
                <Link to={nextPageLink} rel="next" className="button">
                  Next →
                </Link>
              </li>
            )}
          </ul>
        </div>
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "MM/DD/YY")
          }
        }
      }
    }
  }
`

export const Head = () => (
  <SEO
    title="Blog"
    description="Blog posts from Bob Matyas, a web developer in Grand Rapids, Michigan"
  />
)
