import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

function Now(): JSX.Element {
  return (
    <Layout>
      <div className="main">
        <h2 className="main__header">What I&apos;m Doing Now</h2>

        <div className="page">
          <p>
            This is a now page, and if you have your own site, you should{" "}
            <a href="https://nownownow.com/about">make one</a>, too.
          </p>

          <p>
            Eventually, I&apos;ll make this more dynamic, but for now it is
            manually updated. Last update: <b>01/01/23</b>
          </p>
          <h3>🧑‍💻 Learning</h3>

          <h4>WordPress Plugins</h4>

          <p>I have been learning to build WordPress plugins.</p>

          <h3>🎵 Listening</h3>
          <p>Late-1990s punk rock nostalgia.</p>

          <h3>📚 Reading</h3>

          <ul>
            <li>
              <cite>The Every</cite> by Dave Eggers
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Now

export const Head = () => <SEO title="Now" description="What I'm up to now" />
