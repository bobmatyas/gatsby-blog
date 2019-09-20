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

    <Gradient color="dark" />

    <div className="main__content">
      <h2 className="main__content__header">About</h2>
      
      <p>This will be a simple dimple bio.</p>
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