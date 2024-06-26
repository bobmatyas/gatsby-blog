import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PageNotFound = () => (
  <Layout>
    <div className="main">
      <h2 className="main__header">Page Not Found</h2>

      <div className="four04">
        <p>Oops! The page you are looking for was not found.</p>

        <p>
          <a href="https://www.bobmatyas.com">Navigate back to the homepage.</a>
        </p>
      </div>
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

export default PageNotFound

export const Head = () => (
  <SEO title="404 - Page Not Found" description="Page not found" />
)
