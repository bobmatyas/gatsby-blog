import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gradient from "../components/gradient"
import Skills from "../components/skills"
import Card from "../components/portfolio-card"


const styles = {
  maxWidth: '400px',
  opacity: '0.95'
}


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


      <div className="projects__card">
        <div className="projects__card__image">
          <Img style={styles}
            fluid={data.imagePicturePalette.childImageSharp.fluid}
            alt="picturepalette screenshot"
          />
        </div>

        <h3 className="projects__card__heading">PicturePalette</h3>
        
        <div className="projects__card__view">
          <div className="projects__card__view__icon">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="binoculars" class="svg-inline--fa fa-binoculars fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M416 48c0-8.84-7.16-16-16-16h-64c-8.84 0-16 7.16-16 16v48h96V48zM63.91 159.99C61.4 253.84 3.46 274.22 0 404v44c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32V288h32V128H95.84c-17.63 0-31.45 14.37-31.93 31.99zm384.18 0c-.48-17.62-14.3-31.99-31.93-31.99H320v160h32v160c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-44c-3.46-129.78-61.4-150.16-63.91-244.01zM176 32h-64c-8.84 0-16 7.16-16 16v48h96V48c0-8.84-7.16-16-16-16zm48 256h64V128h-64v160z"></path></svg>
          </div>

          <div class="projects__card__view__inner">
            View: <a href="https://picturepalette.netlify.com">Online</a> | <a href="https://github.com/bobmatyas/gc-final-project">Code</a>
          </div>

        </div>
        

        <p className="projects__card__description">
          PicturePalette allows creatives to search quality, free stock photography by color - a rarity in the marketing world. This curative app is perfect for creatives looking for photography that compliments their brand colors. 
        </p>
        
        <p className="projects__card__description">
          It queries two different APIs to provide the functionality: PixaBay and ColorTag. I wrote the JavaScript that interfaces with the PixaBay API, participated in the overall architecting of the app, and contributed bug fixes. I also implemented the CSS and JavaScript that allows for toggling between light and dark mode.
        </p>

        <h4 className="projects__card__technologies">
          <div className="projects__card__technologies__icon">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="code" class="svg-inline--fa fa-code fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path></svg>
          </div>

          <span className="projects__card__technologies__inner">Technologies</span>

        </h4>
          <ul className="projects__card__technologies__list">
            <li className="projects__card__technologies__list__item">HTML</li>
            <li className="projects__card__technologies__list__item">CSS</li>
            <li className="projects__card__technologies__list__item">JAVASCRIPT</li>
            <li className="projects__card__technologies__list__item">ANGULARJS</li>
            <li className="projects__card__technologies__list__item">SASS</li>
          </ul>
      </div>


      <div className="projects__card">
        <div className="projects__card__image">
          <Img style={styles}
            fluid={data.imageWhereWorld.childImageSharp.fluid}
            alt="where in the world screenshot"
          />
        </div>

        <h3 className="projects__card__heading">Where in the World?</h3>
        
        <div className="projects__card__view">
          <div className="projects__card__view__icon">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="binoculars" class="svg-inline--fa fa-binoculars fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M416 48c0-8.84-7.16-16-16-16h-64c-8.84 0-16 7.16-16 16v48h96V48zM63.91 159.99C61.4 253.84 3.46 274.22 0 404v44c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32V288h32V128H95.84c-17.63 0-31.45 14.37-31.93 31.99zm384.18 0c-.48-17.62-14.3-31.99-31.93-31.99H320v160h32v160c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-44c-3.46-129.78-61.4-150.16-63.91-244.01zM176 32h-64c-8.84 0-16 7.16-16 16v48h96V48c0-8.84-7.16-16-16-16zm48 256h64V128h-64v160z"></path></svg>
          </div>

          <div class="projects__card__view__inner">
            View: <a href="https://bobmatyas.github.io/fem-rest-countries-api/">Online</a> | <a href="https://github.com/bobmatyas/fem-rest-countries-api">Code</a>
          </div>

        </div>
        

        <p className="projects__card__description">
        Where in the World is a mobile-first web app that presents information about the countries of the world. It queries the Rest Countries API for the data and dynamically searches and filters based on user input. It makes uses of routing so that each country has a unique URL. There is also a night mode toggle. The layout was done using CSS Grid.
        </p>
        
        <h4 className="projects__card__technologies">
          <div className="projects__card__technologies__icon">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="code" class="svg-inline--fa fa-code fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path></svg>
          </div>

          <span className="projects__card__technologies__inner">Technologies</span>

        </h4>
          <ul className="projects__card__technologies__list">
            <li className="projects__card__technologies__list__item">HTML</li>
            <li className="projects__card__technologies__list__item">CSS</li>
            <li className="projects__card__technologies__list__item">JAVASCRIPT</li>
            <li className="projects__card__technologies__list__item">ANGULARJS</li>
          </ul>
      </div>
      </div>

      <Card 
        screenshot={data.imageLilySpa.childImageSharp.fluid}
        title='Lily Spa'
        viewOnline='https://bobmatyas.github.io/lily-spa-pos/'
        viewCode='https://github.com/bobmatyas/lily-spa-pos'
        description='A mobile-first design concept for a spa website. I created the mock-up in Photoshop and converted it to a web layout using Flexbox. I also contributed to the JavaScript powered cart functionality on the site that allows visitors to book sessions online.'
        technologies= {['HTML', 'CSS', 'JAVASCRIPT', 'JQUERY']}
      />


      <Card 
        screenshot={data.imageBookmark.childImageSharp.fluid}
        title='Bookmark'
        viewOnline='https://bobmatyas.github.io/fem-bookmark-landing/'
        viewCode='https://github.com/bobmatyas/fem-bookmark-landing'
        description='A landing page for Bookmark. It features a mobile-first layout built with HTML5 and CSS based on static mock-ups. JavaScript is used to dynamically change content and validate the email form. A production build was setup using Gulp.'
        technologies= {['HTML', 'SASS', 'CSS', 'JAVASCRIPT', 'GULP']}
      />


      <Card 
        screenshot={data.imageDrumMachine.childImageSharp.fluid}
        title='Drum Machine'
        viewOnline='https://codepen.io/bobmatyas/full/mNENyP'
        viewCode='https://codepen.io/bobmatyas/pen/mNENyP'
        description='I built this JavaScript "drum machine" using ReactJS. I created it as one of the freeCodeCamp Front End Libraries projects. It allows for keyboard and mouse based input and dynamically plays a sound based on user input. I themed it based on the old 8-bit Nintendo “sound test” modes that were found in some games. I used the NesCSS library to give it an 8-bit aesthetic.'
        technologies= {['HTML', 'CSS', 'REACTJS']}
      />

      <Card 
        screenshot={data.imageJban.childImageSharp.fluid}
        title='John Ball Area Neighbors'
        viewOnline='https://jbangr.org'
        viewCode=''
        description='I helped John Ball Area Neighbors move from an out-of-date platform onto a custom WordPress setup that added a responsive layout and the ability for staff to update the site. The site integrates their Facebook feed and Google calendar into the layout. I also helped with their SEO and assisted them with setting up their Google Business profile for increased visibility.'
        technologies= {['Wordpress', 'HTML', 'CSS', 'PHP']}
      />

      
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