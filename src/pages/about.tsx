import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <Seo
      title="About Bob Matyas"
      description="All about Bob Matyas, a web developer in Grand Rapids, Michigan"
    />

    <div className="main">
      <h2 className="main__header">About Bob Matyas</h2>

      <div className="page">
        <div className="widget p-2 rounded-md text-sm font-sans shadow-sm border border-red-100">
          <h3 className="text-md font-sans text-bold uppercase mt-2 px-2 font-bold text-slate-700">
            Skills
          </h3>
          <p className="px-2">Test</p>
        </div>
        <p>
          👋 Howdy! I’m Bob Matyas, a web developer living in Grand Rapids,
          Michigan. I like moving pixels around using HTML, CSS, and JavaScript.{" "}
        </p>

        <p>I work at Automattic where I help make the web a better place.</p>

        <p>
          I’m passionate about accessibility, user experience, web performance,
          and the open web. I have been building websites since the late 1990s.
          I remember the days – and pain – of folks making sites using strange
          hacks and table-based layouts. We’ve come a long way since then and I
          love learning the new things coming to the web platform.{" "}
        </p>

        <p>
          When I’m not working online, I’m most likely to be found in the woods,
          riding a bike, foraging for wild plants, or cooking (hopefully) tasty
          vegan food.
        </p>

        <p>
          You can find a summary of what I am up to now here on my{" "}
          <Link to={`/now/`}>/now</Link> page and a list of tools I use on{" "}
          <Link to={`/uses/`}>/uses</Link>.
        </p>
        <h2>Portfolio</h2>

        <p>
          I have <Link to={`/portfolio/`}>a portfolio</Link> of non-work
          projects available here.
        </p>
        <h2>Get in Touch</h2>

        <p>
          If you want to get in touch, you can use{" "}
          <Link to={`/contact/`}>this form</Link>.
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

export default About
