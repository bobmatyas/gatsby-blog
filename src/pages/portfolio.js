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

      <div className="projects__holder">
      <p>For my most recent work, <a href="https://github.com/bobmatyas">check out my GitHub</a></p>

      <div className="projects__card">
        <h3>John Ball Area Neighbors</h3>
        <p>View: <a href="">Online</a> | <a href="">Code</a></p>
        <p>A custom WordPress theme for a neighborhood organization. </p>
        <h4>Technologies</h4>
          <ul>
            <li>WordPress</li>
            <li>HTML/CSS</li>
          </ul>
      </div>

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