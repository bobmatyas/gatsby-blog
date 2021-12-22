import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BlogLink from "../components/home-blog-link"
import Hcard from "../components/hcard"

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
  }
}

const Box = styled.div`
  border: 1px solid #eee;
  border-radius: 5px;
  margin: 25px 0 50px 0;
  padding: 10px 25px 25px 25px;
  -webkit-box-shadow: 0px 5px 10px 0px rgba(180, 180, 180, 0.35);
  -moz-box-shadow: 0px 5px 10px 0px rgba(180, 180, 180, 0.35);
  box-shadow: 0px 5px 10px 0px rgba(180, 180, 180, 0.35);
  border-top: 4px solid var(--pink-color);
`

const PostList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const Index: React.FC<Props> = ({ data }: Props) => {
  return (
    <Layout>
      <Seo
        title="Web Developer"
        description="Bob Matyas is a web developer in Grand Rapids, Michigan. He likes making designs come alive using HTML, CSS, and JavaScript"
      />

      <div className="main__content">
        <Hcard />

        <Box>
          <h2>Recent Blog Posts</h2>

          <PostList>
            {data.allMarkdownRemark.edges.map(({ node }: BlogPosts) => (
              <BlogLink
                link={node.fields.slug}
                date={node.frontmatter.date}
                title={node.frontmatter.title}
                key={node.frontmatter.date}
              />
            ))}
          </PostList>
        </Box>
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
