import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

function Now(): JSX.Element {
  return (
    <Layout>
      <Seo title="Now" description="What I'm up to now" />

      <div className="main">
        <h2 className="main__header">What I&apos;m Doing Now</h2>

        <div className="page">
          <p>
            This is a now page, and if you have your own site, you should{" "}
            <a href="https://nownownow.com/about">make one</a>, too.
          </p>

          <p>
            Eventually, I&apos;ll make this more dynamic, but for now it is
            manually updated. Last update: <b>12/27/21</b>
          </p>
          <h3>🧑‍💻 Learning</h3>

          <h4>Indieweb</h4>

          <p>
            I have been reading and learning about{" "}
            <a href="https://indieweb.org/">the Indieweb</a>. This has resulted
            in a number of recent changes to this website.
          </p>

          <h4>JavaScript for WordPress</h4>
          <p>
            I have been working through{" "}
            <a href="https://javascriptforwp.com/">
              the JavaScript for WordPress
            </a>{" "}
            to learn more about JavaScript in the context of WordPress.
          </p>

          <h3>🎵 Listening</h3>
          <p>
            I have been really into the podcasts{" "}
            <a href="https://podcasts.apple.com/us/podcast/reply-alt/id1524233222">
              Reply Alt
            </a>{" "}
            and{" "}
            <a href="https://podcasts.apple.com/us/podcast/road-to-the-skeleton-coast/id1505419097">
              On The Road to the Skeleton Coast
            </a>
            . Lots of late-1990s punk rock nostalgia.
          </p>

          <h3>📚 Reading</h3>

          <ul>
            <li>
              <i>100 Things We&apos;ve Lost to the Internet</i> by Pamela Paul
            </li>
            <li>
              <i>
                Hype: How Scammers, Grifters, and Con Artists Are Taking Over
                the Internet―and Why We&apos;re Following
              </i>{" "}
              by Gabrielle Bluestone
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
