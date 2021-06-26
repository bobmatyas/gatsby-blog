import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import Seo from "../components/seo"
import Gradient from "../components/gradient"
import HomeBox from "../components/home-box";
import BlogLink from "../components/home-blog-link"
import Social from "../components/social-links"

const Box = styled.div`
  border: 1px solid #eee;
  border-radius: 5px;
  margin: 50px 0 75px 0;
  padding: 10px 25px 25px 25px;
  -webkit-box-shadow: 0px 5px 10px 0px rgba(180,180,180,0.35);
  -moz-box-shadow: 0px 5px 10px 0px rgba(180,180,180,0.35);
  box-shadow: 0px 5px 10px 0px rgba(180,180,180,0.35);
  border-top: 4px solid #845EC2;

  h2 { margin-bottom: 0; }
`;

const Index = ({ data }) => {
  return (
    <Layout>
      <Seo 
        title="Web Developer"
        description="Bob Matyas is a web developer in Grand Rapids, Michigan. He likes making designs come alive using HTML, CSS, and JavaScript"
      />

    <Gradient color="purple" />

    <div className="main__content">

    <Box>
      <h2>Recent Blog Posts</h2>

      { data.allMarkdownRemark.edges.map(({ node }) => (
      
        <BlogLink 
          link={node.fields.slug}
          date={node.frontmatter.date}
          title={node.frontmatter.title}
        />
      ))}
    </Box>
    
    <HomeBox
        title="About Bob Matyas"
        content="I'm a web developer living in Grand Rapids, Michigan. I like to make designs come to life using a combination of HTML, CSS, and JavaScript."
      /> 

    <Box>
      <h3>Connect with Me</h3>
      <Social />
    </Box>
    </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(limit: 5, sort: { fields: [frontmatter___date], order: DESC}) {
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

export default Index; 