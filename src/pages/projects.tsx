import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => (
  <Layout>
    <div className="main">
      <h2 className="main__header">Projects</h2>

      <div className="page">
        <h3>WordPress Security Research</h3>
        <p>
          Actively searching for and finding vulnerabilities in WordPress
          plugins and themes. See recent findings on{" "}
          <a href="https://www.wordfence.com/threat-intel/vulnerabilities/researchers/bob-matyas">
            my WordFence researcher profile
          </a>
          .
        </p>

        <h3>Block AI Crawlers WordPress Plugin</h3>
        <p>
          A plugin designed that adds `robots.txt` entries and Meta Tags to
          WordPress to block AI crawlers.
        </p>
        <p>
          <a href="https://github.com/bobmatyas/wp-block-ai-crawlers">
            View on GitHub
          </a>
        </p>

        <h3>Details: Show and Hide WordPress Plugin</h3>
        <p>
          A WordPress plugin that allows you to hide content using the DETAILS
          HTML element.{" "}
        </p>
        <p>
          <a href="https://github.com/bobmatyas/bm-wp-details-block">
            View on GitHub
          </a>
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

export default Projects

export const Head = () => (
  <SEO
    title="Projects"
    description="Contact Bob Matyas, a web developer in Grand Rapids, Michigan"
  />
)
