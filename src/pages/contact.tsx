import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = () => (
  <Layout>
    <Seo
      title="Contact"
      description="Contact Bob Matyas, a web developer in Grand Rapids, Michigan"
    />

    <div className="main">
      <h2 className="main__header">Contact</h2>

      <div className="page">
        <div className="contact__page">
          <p>
            Want to get in touch? You can use this form to send me an email.
          </p>

          {/* eslint-disable-next-line react/no-unknown-property */}
          <form
            name="contact"
            data-netlify="true"
            // eslint-disable-next-line react/no-unknown-property
            netlify-honeypot="goodluck"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out if you’re human:{" "}
                <input name="goodluck" type="text" />
              </label>
            </p>

            <p>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required={true}
                placeholder="Enter your name."
              />
            </p>
            <p>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address."
              />
            </p>
            <p>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows={6}
                required={true}
                placeholder="Enter your message."
              />
            </p>
            <ul>
              <li>
                <input type="submit" value="Send Message" className="button" />
              </li>
            </ul>
          </form>
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

export default Contact
