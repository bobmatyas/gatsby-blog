import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Success = () => (
  <Layout>
    <div className="main">
      <h2 className="main__header">Success!</h2>

      <p>Thank you for contacting me. I&apos;ll get back to you shortly.</p>
    </div>
  </Layout>
)

export default Success

export const Head = () => (
  <SEO
    title="Contact"
    description="Contact Bob Matyas, a web developer in Grand Rapids, Michigan"
  />
)
