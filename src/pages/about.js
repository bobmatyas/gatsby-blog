import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gradient from "../components/gradient"

export default ({ data }) => (
  <Layout>
    
    <SEO 
      title="About"
      description="All about Bob Matyas, a web developer in Grand Rapids, Michigan"
    />

    <Gradient />

    <div className="main__content">
      <h1>About</h1>
      <p>
        We're the only site running on your computer dedicated to showing the best
        photos and videos of pandas eating lots of food.
      </p>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`