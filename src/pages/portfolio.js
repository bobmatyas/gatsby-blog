import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gradient from "../components/gradient"
import Skills from "../components/skills"

let styles = {
  maxWidth: '722px'
}

export default ({ data }) => (
  <Layout>
    <SEO 
      title="Portfolio"
      description="The web development portfolio of Bob Matyas, a web developer in Grand Rapids, Michigan"
    />


    <Gradient />
    
    <div className="main__content">
    
      <h2>Portfolio</h2>

      <Skills />
      
      <h3 classname="projects__header">Projects</h3>

      <p>For my most recent work, <a href="https://github.com/bobmatyas">check out my GitHub</a></p>

      <div style={styles}>
        <Img
          fluid={data.imageOne.childImageSharp.fluid}
          alt="lily spa screenshot"
        />
      </div>

      <div style={styles}>
        <Img
          fluid={data.imageTwo.childImageSharp.fluid}
          alt="where in the world screenshot"
        />
      </div>

      <div style={styles}>
        <Img
          fluid={data.imageThree.childImageSharp.fluid}
          alt="picture palette screenshot"
        />
      </div>

    </div>
  </Layout>
)

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "images/portfolio-lily_spa.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 722) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    imageTwo: file(relativePath: { eq: "images/portfolio-where_world.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 722) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    imageThree: file(relativePath: { eq: "images/portfolio-picture_palette.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 722) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;