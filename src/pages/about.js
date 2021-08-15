import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Gradient from "../components/gradient"
import Social from "../components/social-links"
import styled from "styled-components"

const WelcomeLine = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
`;

const About = () => (
  <Layout>
    
    <Seo 
      title="About Bob Matyas"
      description="All about Bob Matyas, a web developer in Grand Rapids, Michigan"
    />

    <Gradient color="purple" />

    <div className="main__content">
      <h2 className="main__content__header">About Bob Matyas</h2>

      <WelcomeLine>👋 Howdy! I’m Bob Matyas, an experienced web developer living in Grand Rapids, Michigan. I like moving pixels around using HTML, CSS, and JavaScript. </WelcomeLine> 

      <p>I work as a Happiness Engineer at Automattic where I help folks using self-hosted WordPress succeed using Jetpack.</p>

      <p>Outside of my job duties, I’m passionate about accessibility, user experience, web performance, and the open web. I have been building websites since the late 1990s. I remember the days – and pain – of folks making sites using strange hacks and table-based layouts. We’ve come a long way since then and I love learning the new things coming to the web platform. </p>

      <p>When I’m not working online, I’m most likely to be found in probably in the woods, riding a bike, foraging for wild plants, or cooking (hopefully) tasty vegan food.</p>

      <h2>Follow Bob Matyas on Social Media</h2>

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