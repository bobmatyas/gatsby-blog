import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <div className="main">
      <h1 className="main__header">About Bob Matyas</h1>

      <div className="page">
        <div className="md:grid md:grid-cols-4 md:gap-10">
          <div className="md:grid-col-start-1 md:col-span-3">
            <p>
              I&apos;ve been puttering around on the Internet since the 1990s.
            </p>

            <p>
              During the day I work at{" "}
              <a href="https://automattic.com">Automattic</a>, where I help make
              the web a better place.
            </p>

            <p>
              I use this site primarily as a digital garden and write about web
              development, the indieweb, and other random stuff.
            </p>

            <p>
              When I’m not working online, I’m most likely to be found in the
              woods, riding a bike, foraging for wild plants, or cooking
              (hopefully) tasty vegan food.
            </p>

            <p>
              You can find a summary of what I am up to now here on my{" "}
              <Link to={`/now/`}>/now</Link> page and a list of tools I use on{" "}
              <Link to={`/uses/`}>/uses</Link>.
            </p>

            <h2>Get in Touch</h2>

            <p>
              If you want to get in touch, you can use{" "}
              <Link to={`/contact/`}>this form</Link>.
            </p>
          </div>

          <div className="md:col-span-1">
            <div className="widget p-2 rounded-md text-sm font-sans shadow-sm border border-red-100">
              <h3 className="text-md font-sans text-bold uppercase mt-2 px-2 font-bold text-slate-700">
                Skills
              </h3>
              <ul className="px-2 flex flex-row flex-wrap gap-2">
                <li className="skills__item">HTML</li>
                <li className="skills__item">CSS</li>
                <li className="skills__item">JavaScript</li>
                <li className="skills__item">WordPress</li>
                <li className="skills__item">React</li>
                <li className="skills__item">SASS</li>
                <li className="skills__item">Adobe CC</li>
              </ul>
            </div>
          </div>
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

export default About

export const Head = () => (
  <SEO
    title="About Bob Matyas"
    description="All about Bob Matyas, a web developer in Grand Rapids, Michigan"
  />
)
