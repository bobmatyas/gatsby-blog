import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const PageNotFound = () => (
  <Layout>
    <Seo title="404 - Page Not Found" description="Page not found" />

    <div className="main__content">
      <h2>Page Not Found</h2>

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
