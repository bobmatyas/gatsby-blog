import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Gradient from "../components/gradient"
import Social from "../components/social-links"


const Contact = ({ data }) => (
  <Layout>

    <Seo
      title="Contact"
      description="Contact Bob Matyas, a web developer in Grand Rapids, Michigan"
    />

    <Gradient color="purple" />

    <div className="main__content">

      <h2 className="main__content__header">Contact</h2>

      <div className="contact__page">

        <div className="contact__page__form__holder">

          <p>I'm currently available for web development projects. If you have a great idea that you are looking to implement, don't hesitate to get in touch.</p>

          <form name="contact" data-netlify="true" netlify-honeypot="goodluck" >
            
            <input type="hidden" name="form-name" value="contact" />
            <p class="hidden">
              <label>Don’t fill this out if you’re human: <input name="goodluck" /></label>
            </p>

            <label htmlFor="name" className="contact__form__label">Name</label>
            <input type="text" name="name" id="name" required className="contact__form__input" />
            
            <label htmlFor="email" className="contact__form__label">Email</label>
            <input type="email" name="email" id="email" required className="contact__form__input" />

            <label htmlFor="message" className="contact__form__label">Message</label>
              <textarea name="message" id="message" rows="6" className="contact__form__input" required />

            <ul className="contact__form__actions">
              <li>
                <input type="submit" value="Send Message" className="contact__form__button" />
              </li>
              <li>
                <input type="reset" value="Clear" className="contact__form__button" />
              </li>
            </ul>
          </form>

        </div>
        <div className="contact__page__social__holder">
          <h3>Connect on Social Media</h3>

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

export default Contact; 