import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Social from "../components/social-links"
import styled from "styled-components"

const FormHolder = styled.div`
  @media screen and (min-width: 1000px) {
    width: 65%;
  }
`

const FormInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: -1px 3px 7px 1px rgba(102, 102, 102, 0.2);
  font-size: 16px;
  color: #666666;
  padding: 10px;
  margin: 0 0 25px 0;
  max-width: 500px;
  width: 100%;
`

const FormTextBox = styled.textarea`
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: -1px 3px 7px 1px rgba(102, 102, 102, 0.2);
  font-size: 16px;
  color: #666666;
  padding: 10px;
  margin: 0 0 25px 0;
  max-width: 500px;
  width: 100%;
`

const FormLabel = styled.label`
  color: #666666;
  display: block;
  font-weight: bold;
  padding: 0;
  margin: 0 0 5px 0;
`

const FormActions = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;

  li:last-of-type {
    margin-left: 15px;
  }
`

const FormButton = styled.input`
  background-color: #000;
  border-radius: 5px;
  border: 1px solid #000;
  background-color: #fff;
  color: #000;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 15px;

  :active {
    transform: translateY(6px);
  }

  :hover {
    background-color: #000;
    cursor: pointer;
    color: #fff;
  }
`

const Contact = () => (
  <Layout>
    <Seo
      title="Contact"
      description="Contact Bob Matyas, a web developer in Grand Rapids, Michigan"
    />

    <div className="main__content">
      <h2 className="main__content__header">Contact</h2>

      <div className="contact__page">
        <FormHolder>
          <p>
            Want to get in touch? You can use this form to send me an email.
          </p>

          {/* eslint-disable-next-line react/no-unknown-property */}
          <form name="contact" data-netlify="true" netlify-honeypot="goodluck">
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="goodluck" />
              </label>
            </p>

            <FormLabel htmlFor="name">Name</FormLabel>
            <FormInput type="text" name="name" id="name" required={true} />

            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput type="email" name="email" id="email" />

            <FormLabel htmlFor="message">Message</FormLabel>
            <FormTextBox name="message" id="message" rows={6} required={true} />

            <FormActions>
              <li>
                <FormButton type="submit" value="Send Message" />
              </li>
              <li>
                <FormButton type="reset" value="Clear" />
              </li>
            </FormActions>
          </form>
        </FormHolder>

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

export default Contact
