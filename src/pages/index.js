import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeLinks from "../components/home-links"

export default ({ data }) => {
  return (
    <Layout>
      <SEO 
        title="Web Developer"
        description="Bob Matyas is a web developer in Grand Rapids, Michigan. He likes making designs come alive using HTML, CSS, and JavaScript"
      />
      <div className="home__splash">
        <div className="home__splash__holder">
          <div className="home__splash__bike">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 60" x="0px" y="0px" fill="currentColor"><path d="M13,7.33a3.75,3.75,0,1,0-2.48-4.69A3.76,3.76,0,0,0,13,7.33Z"/><path d="M27.44,13,27.38,13a1.09,1.09,0,0,0-1.29-.34l-.9.33L27,13A2.85,2.85,0,0,1,27.44,13Z"/><path d="M46.08,25.72a9.38,9.38,0,0,0-4.87-5.31,9.3,9.3,0,0,0-3.5-.87,9.52,9.52,0,0,0-3.7.56,10.37,10.37,0,0,0-1.22.56l-3.54-5a2.42,2.42,0,0,1-1.42,2l.25.39-8.23,3a2.42,2.42,0,0,1,.81,1.12l.28.77,7.33-2.67L23.65,30.6l.88,2.4a2.6,2.6,0,0,1,.22.74L30.23,21l.68.93-.11.11a9.44,9.44,0,0,0-3,6.42,9.55,9.55,0,0,0,.56,3.7,9.43,9.43,0,0,0,1.95,3.19,9.28,9.28,0,0,0,2.92,2.12,9.42,9.42,0,0,0,10.4-1.63,9.51,9.51,0,0,0,3-6.43A9.55,9.55,0,0,0,46.08,25.72ZM43.73,32a7.18,7.18,0,0,1-13-6.07,7.25,7.25,0,0,1,1.51-2.12L36.3,29.6a1.17,1.17,0,0,0,1.58.28,1.14,1.14,0,0,0,.27-1.58l-4.06-5.81.68-.29a7.18,7.18,0,0,1,9,9.78Z"/><path d="M19.49,34.84l-.25-.68-.1,0a10.53,10.53,0,0,0-1.48-2.1A9.35,9.35,0,0,0,14.74,30a9.16,9.16,0,0,0-1.53-.51l.42-2.8,4.18,3.75-1.67-4.51-.71-.63-1.83-.34L11,24.33l.56.51L11,29.15a9.42,9.42,0,0,0-3.44.57A9.46,9.46,0,0,0,1.36,38.1a9.55,9.55,0,0,0,.56,3.7,9.43,9.43,0,0,0,2,3.19A9.41,9.41,0,0,0,14,47.43a9.41,9.41,0,0,0,5.32-4.85,9.13,9.13,0,0,0,.89-3.47A11.29,11.29,0,0,0,20,36.55l.64-.23A2.56,2.56,0,0,1,19.49,34.84Zm-6.62-3.17a6.73,6.73,0,0,1,.93.38,7,7,0,0,1,2,1.32A13.09,13.09,0,0,1,17,35l-4.9,1.79Zm5.07,7.66a6.79,6.79,0,0,1-.66,2.28,7.18,7.18,0,1,1-9-9.77,7,7,0,0,1,2.35-.43l-1,7a1.21,1.21,0,0,0,.42,1.07,1.16,1.16,0,0,0,1.11.24l6.66-2.42A6.14,6.14,0,0,1,17.94,39.33Z"/><path d="M28.72,15.41A1.8,1.8,0,0,1,27.53,17a1.76,1.76,0,0,1-.69.11l-7-.3a1.8,1.8,0,0,1-1.33-.67l-1.63-2-1.43,6,3,.66a2.21,2.21,0,0,1,1.65,1.39L23,29.9l1.17,3.22a2.33,2.33,0,0,1-4.37,1.6L18.65,31.5l-2.37-6.6-2.55-.5-3.42-.81L10,23.51a1.55,1.55,0,0,1-.23-.06c-.79-.19-2-.15-2.51-.93s0-1.68.17-2.4c.94-4,1.91-8,2.86-11.94A.65.65,0,0,1,11,7.7l5.89,1.41H17l.37.09c.2,0,.56.46.62.54l2.81,3.52,6.21.26A1.8,1.8,0,0,1,28.72,15.41Z"/></svg>
          </div>
          
          <h2 className="home__splash__text"><span className="home__splash__text__inner">Hi, I'm Bob Matyas.</span></h2>      
          
          <p className="home__splash__text__intro">I make modern websites using HTML, CSS, and JavaScript.</p>

          <HomeLinks />
  
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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