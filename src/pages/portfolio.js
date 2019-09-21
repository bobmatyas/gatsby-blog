import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gradient from "../components/gradient"
import Skills from "../components/skills"
import Card from "../components/portfolio-card"


export default ({ data }) => (
  <Layout>
    <SEO 
      title="Portfolio"
      description="The web development portfolio of Bob Matyas, a web developer in Grand Rapids, Michigan"
    />


    <Gradient />
    
    <div className="main__content">
    
      <h2 className="main__content__header">Portfolio</h2>

      <Skills />
      
      <h3 className="projects__header">Projects</h3>

      <div className="projects__holder">
      
        <p>For my most recent work, <a href="https://github.com/bobmatyas">check out my GitHub</a></p>

      <Card 
        screenshot={data.imagePicturePalette.childImageSharp.fluid}
        title='PicturePalette'
        viewOnline='https://picturepalette.netlify.com'
        viewCode='https://github.com/bobmatyas/gc-final-project'
        description= {
          ['PicturePalette allows creatives to search quality, free stock photography by color - a rarity in the marketing world. This curative app is perfect for creatives looking for photography that compliments their brand colors.',
          'It queries two different APIs to provide the functionality: PixaBay and ColorTag. I wrote the JavaScript that interfaces with the PixaBay API, participated in the overall architecting of the app, and contributed bug fixes. I also implemented the CSS and JavaScript that allows for toggling between light and dark mode.']
        }
        technologies= {['HTML', 'CSS', 'JAVASCRIPT', 'ANGULARJS', 'SASS']}
      />

      <Card 
        screenshot={data.imageWhereWorld.childImageSharp.fluid}
        title='Where in the World?'
        viewOnline='https://bobmatyas.github.io/fem-rest-countries-api/'
        viewCode='https://github.com/bobmatyas/fem-rest-countries-api'
        description= {['Where in the World is a mobile-first web app that presents information about the countries of the world. It queries the Rest Countries API for the data and dynamically searches and filters based on user input. It makes uses of routing so that each country has a unique URL. There is also a night mode toggle. The layout was done using CSS Grid.']}
        technologies= {['HTML', 'CSS', 'JAVASCRIPT', 'ANGULARJS']}
      />

      <Card 
        screenshot={data.imageLilySpa.childImageSharp.fluid}
        title='Lily Spa'
        viewOnline='https://bobmatyas.github.io/lily-spa-pos/'
        viewCode='httpvs://github.com/bobmatyas/lily-spa-pos'
        description= {['A mobile-first design concept for a spa website. I created the mock-up in Photoshop and converted it to a web layout using Flexbox. I also contributed to the JavaScript powered cart functionality on the site that allows visitors to book sessions online.']}
        technologies= {['HTML', 'CSS', 'JAVASCRIPT', 'JQUERY']}
      />


      <Card 
        screenshot={data.imageBookmark.childImageSharp.fluid}
        title='Bookmark'
        viewOnline='https://bobmatyas.github.io/fem-bookmark-landing/'
        viewCode='https://github.com/bobmatyas/fem-bookmark-landing'
        description= {['A landing page for Bookmark. It features a mobile-first layout built with HTML5 and CSS based on static mock-ups. JavaScript is used to dynamically change content and validate the email form. A production build was setup using Gulp.']}
        technologies= {['HTML', 'SASS', 'CSS', 'JAVASCRIPT', 'GULP']}
      />


      <Card 
        screenshot={data.imageDrumMachine.childImageSharp.fluid}
        title='Drum Machine'
        viewOnline='https://codepen.io/bobmatyas/full/mNENyP'
        viewCode='https://codepen.io/bobmatyas/pen/mNENyP'
        description= {['I built this JavaScript "drum machine" using ReactJS. I created it as one of the freeCodeCamp Front End Libraries projects. It allows for keyboard and mouse based input and dynamically plays a sound based on user input. I themed it based on the old 8-bit Nintendo “sound test” modes that were found in some games. I used the NesCSS library to give it an 8-bit aesthetic.']}
        technologies= {['HTML', 'CSS', 'REACTJS']}
      />

      <Card 
        screenshot={data.imageJban.childImageSharp.fluid}
        title='John Ball Area Neighbors'
        viewOnline='https://jbangr.org'
        viewCode=''
        description= {['I helped John Ball Area Neighbors move from an out-of-date platform onto a custom WordPress setup that added a responsive layout and the ability for staff to update the site. The site integrates their Facebook feed and Google calendar into the layout. I also helped with their SEO and assisted them with setting up their Google Business profile for increased visibility.']}
        technologies= {['Wordpress', 'HTML', 'CSS', 'PHP']}
      />

      </div>
      
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query {
    imageLilySpa: file(relativePath: { eq: "portfolio-lily_spa.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    imageWhereWorld: file(relativePath: { eq: "images/portfolio-where_world.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    imagePicturePalette: file(relativePath: { eq: "images/portfolio-picture_palette.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    imageJban: file(relativePath: { eq: "images/portfolio-jban.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    imageDrumMachine: file(relativePath: { eq: "portfolio-drum_machine.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    imageBookmark: file(relativePath: { eq: "images/portfolio-bookmark.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;