import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"

const BlogPost = styled.article`
  border: 1px solid #eee;
  border-radius: 5px;
  margin: 0 0 25px 0;
  padding: 25px;
  -webkit-box-shadow: 0px 5px 10px 0px rgba(180, 180, 180, 0.35);
  -moz-box-shadow: 0px 5px 10px 0px rgba(180, 180, 180, 0.35);
  box-shadow: 0px 5px 10px 0px rgba(180, 180, 180, 0.35);

  a {
    color: var(--purple-color);
  }
  :hover {
    -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  :hover h3 {
    text-decoration: underline;
  }
`

const BlogPostDate = styled.p`
  color: #666;
  font-family: var(--system-fonts);
  border-bottom: 1px solid #ccc;
  font-variant: small-caps;
  font-weight: bold;
  font-size: 75%;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
`

const BlogPostHeader = styled.h3`
  margin: 12.5px 0 12.5px 0;
  padding: 5px 0;
`

const BlogPostDescription = styled.p`
  color: #666;
`

const NavigationLinks = styled.p`
  align-items: center;
  display: flex;
  justify-content: space-between;
`
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
        <Seo
          title="Blog"
          description="Blog posts from Bob Matyas, a web developer in Grand Rapids, Michigan"
        />

        <div className="main__content">
          <h2 className="main__content__header">Blog</h2>

          {posts.map(({ node }: BlogPosts) => (
            <BlogPost className="h-entry" key={node.fields.slug}>
              <Link to={node.fields.slug} className="u-uid u-url">
                <BlogPostDate className="dt-published">
                  {node.frontmatter.date}
                </BlogPostDate>

                <BlogPostHeader className="p-name">
                  {node.frontmatter.title}{" "}
                </BlogPostHeader>

                <BlogPostDescription className="p-summary">
                  {node.frontmatter.description}
                </BlogPostDescription>
              </Link>
            </BlogPost>
          ))}

          <NavigationLinks>
            {!isFirst && (
              <Link to={prevPageLink} rel="prev">
                ← Previous Page
              </Link>
            )}
            {!isLast && (
              <Link to={nextPageLink} rel="next">
                Next Page →
              </Link>
            )}
          </NavigationLinks>
        </div>
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
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
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
