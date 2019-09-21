import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gradient from "../components/gradient"
import Social from "../components/social-links"


export default ({ data }) => (
  <Layout>

    <SEO
      title="Contact"
      description="Contact Bob Matyas, a web developer in Grand Rapids, Michigan"
    />

    <Gradient />

    <div className="main__content">

      <h2>Contact</h2>

      <div className="contact__page">

        <div className="contact__page__form__holder">

          <p>I'm currently available for web development projects. If you have a great idea that you are looking to implement, don't hesitate to get in touch.</p>

          <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="6" required />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Clear" />
              </li>
            </ul>
          </form>

        </div>
        <div className="contact__page__social__holder">
          <h3>Social</h3>

          <Social />
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