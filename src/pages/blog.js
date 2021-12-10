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
  -webkit-box-shadow: 0px 5px 10px 0px rgba(180,180,180,0.35);
  -moz-box-shadow: 0px 5px 10px 0px rgba(180,180,180,0.35);
  box-shadow: 0px 5px 10px 0px rgba(180,180,180,0.35);

  :hover {
    -webkit-box-shadow: 0px 5px 10px 0px rgba(0,0,0, 0.5);
    -moz-box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.5);
    box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.5);
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
`;

const BlogPostHeader = styled.h3`  
  margin: 12.5px 0 12.5px 0;
  padding: 5px 0;
`;

const BlogPostDescription = styled.p`
  color: #666;
`;


const Blog = ({ data }) => {
  return (
  <Layout>
    
    <Seo 
      title="Blog"
      description="Blog posts from Bob Matyas, a web developer in Grand Rapids, Michigan"
    />
        
    <div className="main__content">

    <h2 className="main__content__header">Blog</h2>

        { data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogPost className="h-entry" key={node.id}>
            <Link
              to={node.fields.slug} className="u-uid u-url">

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