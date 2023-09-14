import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ProjectCard from "../components/ProjectCard"
import SEO from "../components/seo"

const Projects = () => (
  <Layout>
    <div className="main">
      <h2 className="main__header">Projects</h2>

      <div className="page">
        <div className="grid sm:gap-4 sm:grid-cols-2">
          <ProjectCard
            name="WordPress Security Research"
            description="Actively searching for and finding vulnerabilities in WordPress
		plugins and themes."
            link="https://www.wordfence.com/threat-intel/vulnerabilities/researchers/bob-matyas"
            linkTitle="View my WordFence Researcher Profile"
          />

          <ProjectCard
            name="Block AI Crawlers WordPress Plugin"
            description="A plugin designed that adds `robots.txt` entries and Meta Tags to
          WordPress to block AI crawlers."
            link="https://github.com/bobmatyas/wp-block-ai-crawlers"
            linkTitle="View on GitHub"
          />

          <ProjectCard
            name="Details: Show and Hide WordPress Plugin"
            description="A WordPress plugin that allows you to hide content using the DETAILS
          HTML element."
            link="https://github.com/bobmatyas/bm-wp-details-block"
            linkTitle="View on GitHub"
          />
        </div>
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
