import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gradient from "../components/gradient"

const Index = ({ data }) => {
  return (
    <Layout>
      <SEO 
        title="Web Developer"
        description="Bob Matyas is a web developer in Grand Rapids, Michigan. He likes making designs come alive using HTML, CSS, and JavaScript"
      />

    <Gradient color="purple" />

    <div className="main__content">

      <h2>About</h2>
      <p>My name is Bob Matyas. I am a web developer living in Grand Rapids, Michigan. I like to make designs come to life using a combination of HTML, CSS, and JavaScript.</p> 

{ data.allMarkdownRemark.edges.map(({ node }) => (
  <article className="blog__card" key={node.id}>
    <Link
      to={node.fields.slug}>

      <p className="blog__card__date">
        {node.frontmatter.date}
      </p>
      
      <h3 className="blog__card__header">
        {node.frontmatter.title}{" "}
      </h3>
    
      <p className="blog__card__text">
        {node.frontmatter.description}
      </p>
      
    </Link>
  </article>
))}

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
            date(formatString: "DD MMMM, YYYY")
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