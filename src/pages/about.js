import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gradient from "../components/gradient"
import Social from "../components/social-links"

const About = ({ data }) => (
  <Layout>
    
    <SEO 
      title="About"
      description="All about Bob Matyas, a web developer in Grand Rapids, Michigan"
    />

    <Gradient color="purple" />

    <div className="main__content">
      <h2 className="main__content__header">About</h2>

      <p>My name is Bob Matyas. I am a web developer living in Grand Rapids, Michigan.</p> 

      <p>I like to make designs come to life using a combination of HTML, CSS, and JavaScript. I have experience building and deploying websites using WordPress as well as using custom solutions. I’m passionate about creating a web that is usable for everyone and I place a lot of value on user experience, accessibility, and performance. I’m interested in the intersection of humans/machines and believe that we build better software when we keep in mind the people using our products.</p>

      <p>When I’m not building websites, you’d probably find me in the woods, riding my bike, foraging for wild plants, or otherwise trying to maintain a connection to the land.</p> 

      <p>You can learn more about what I do:</p>

      <Social />
      

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

export default About; 