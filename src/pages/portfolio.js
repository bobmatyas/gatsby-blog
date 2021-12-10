import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Gradient from "../components/gradient"
import Skills from "../components/skills"
import Card from "../components/portfolio-card"
import styled from "styled-components"

const PortfolioHolder = styled.div`

  margin: 25px auto;
  width: 300px;

  @media screen and (min-width:800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0;
    width: 100%;
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
  }

`;

const Portfolio = ({ data }) => (
  <Layout>
    <Seo 
      title="Portfolio"
      description="The web development portfolio of Bob Matyas, a web developer in Grand Rapids, Michigan"
    />


    <Gradient color="purple" />
    
    <div className="main__content">
    
      <h2 className="main__content__header">Portfolio</h2>

      <Skills />
      
      <h3 className="projects__header">Projects</h3>
      
      <p className="projects__note">For additional projects, please check out my <a href="https://github.com/bobmatyas" target="_blank" rel="noopener noreferrer">Github</a> and <a href="https://codepen.io/bobmatyas"  target="_blank" rel="noopener noreferrer">CodePen</a>.</p>
     
      <PortfolioHolder>
      

      <Card 
        screenshot={data.imagePicturePalette.childImageSharp.gatsbyImageData}
        title='PicturePalette'
        viewOnline='https://picturepalette2.netlify.app/'
        viewCode='https://github.com/bobmatyas/picturepalette'
        description= {
          ['PicturePalette is an image-based color palette discovery tool written in ReactJS.', 'It allows users to search for stock photography based on color and then generates a complimentary color scheme.']
        }
        technologies= {['HTML', 'CSS', 'JAVASCRIPT', 'REACTJS', 'SASS', 'STYLED COMPONENTS', 'API']}
      />

      <Card 
        screenshot={data.imageMomentumCenter.childImageSharp.gatsbyImageData}
        title='Momentum Center'
        description= {
          ['I worked on a software team to build a web-based user check-in app for the Momentum Center for Social Engagement. The app allows visitors to sign-in and fill out required surveys while giving the organization the ability to better collect data.', 'The application was built using Angular 8 for the front-end with a NodeJS/Express backend. It is hosted on Heroku. I contributed to the front-end team.']
        }
        technologies= {['HTML', 'CSS', 'JAVASCRIPT', 'ANGULAR', 'SASS', 'GOOGLE MATERIAL']}
      />

      <Card 
        screenshot={data.imageFoodFight.childImageSharp.gatsbyImageData}
        title='Food Fight'
        viewOnline='https://bobmatyas.github.io/recipe-app/'
        viewCode='https://github.com/bobmatyas/recipe-app'
        description= {
          ['Food Fight is a recipe finder app built using ReactJS. It queries an API to provide the recipes and another to power the random food trivia featured on the main page. It was designed to be mobile first and makes use of styled components to provide component-based styling.']
        }
        technologies= {['HTML', 'CSS', 'JAVASCRIPT', 'REACTJS', 'SASS', 'API', 'STYLED COMPONENTS']}
      />

      <Card 
        screenshot={data.imageWhereWorld.childImageSharp.gatsbyImageData}
        title='Where in the World?'
        viewOnline='https://bobmatyas.github.io/fem-rest-countries-api/'
        viewCode='https://github.com/bobmatyas/fem-rest-countries-api'
        description= {['Where in the World is a mobile-first web app that presents information about the countries of the world. It queries the Rest Countries API for the data and dynamically searches and filters based on user input. It makes use of routing so that each country has a unique URL. There is also a night mode toggle. The layout was done using CSS Grid.']}
        technologies= {['HTML', 'CSS', 'JAVASCRIPT', 'ANGULARJS', 'API']}
      />

      <Card 
        screenshot={data.imageMovieDb.childImageSharp.gatsbyImageData}
        title='MovieFinder'
        viewOnline='https://bobmatyas.github.io/AngularJS-Movies/'
        viewCode='https://github.com/bobmatyas/AngularJS-Movies'
        description= {['MovieFinder is an app that allows a user to find a movie to watch. It uses The Movie Database API to search for movies based on a search term and then allows a user to fine tune the results with a variety of sorting options. It includes pagination and the ability to "favorite" movies to watch later.']}
        technologies= {['HTML', 'CSS', 'JAVASCRIPT', 'ANGULARJS', 'API']}
      />  

      <Card 
        screenshot={data.imageLilySpa.childImageSharp.gatsbyImageData}
        title='Lily Spa'
        viewOnline='https://bobmatyas.github.io/lily-spa-pos/'
        viewCode='https://github.com/bobmatyas/lily-spa-pos'
        description= {['A mobile-first design concept for a spa website. I created the mock-up in Photoshop and converted it to a web layout using Flexbox. I also contributed to the JavaScript powered cart functionality on the site that allows visitors to book sessions online.']}
        technologies= {['HTML', 'CSS', 'JAVASCRIPT', 'JQUERY']}
      />


      <Card 
        screenshot={data.imageBookmark.childImageSharp.gatsbyImageData}
        title='Bookmark'
        viewOnline='https://bobmatyas.github.io/fem-bookmark-landing/'
        viewCode='https://github.com/bobmatyas/fem-bookmark-landing'
        description= {['A landing page for Bookmark. It features a mobile-first layout built with HTML5 and CSS based on static mock-ups. JavaScript is used to dynamically change content and validate the email form. A production build was setup using Gulp.']}
        technologies= {['HTML', 'SASS', 'CSS', 'JAVASCRIPT', 'GULP']}
      />

      <Card 
        screenshot={data.imageDrumMachine.childImageSharp.gatsbyImageData}
        title='Drum Machine'
        viewOnline='https://codepen.io/bobmatyas/full/mNENyP'
        viewCode='https://codepen.io/bobmatyas/pen/mNENyP'
        description= {['I built this JavaScript "drum machine" using ReactJS. I created it as one of the freeCodeCamp Front End Libraries projects. It allows for keyboard and mouse based input and dynamically plays a sound based on user input. I themed it based on the old 8-bit Nintendo “sound test” modes that were found in some games. I used the NesCSS library to give it an 8-bit aesthetic.']}
        technologies= {['HTML', 'CSS', 'REACTJS', 'JAVASCRIPT']}
      />

      <Card 
        screenshot={data.imageJban.childImageSharp.gatsbyImageData}
        title='John Ball Area Neighbors'
        viewOnline='https://jbangr.org'
        viewCode=''
        description= {['I helped John Ball Area Neighbors move from an out-of-date platform onto a custom WordPress setup that added a responsive layout and the ability for staff to update the site. The site integrates their Facebook feed and Google calendar into the layout. I also helped with their Seo and assisted them with setting up their Google Business profile for increased visibility.']}
        technologies= {['WORDPRESS', 'HTML', 'CSS', 'PHP']}
      />

      </PortfolioHolder>
      
    </div>
  </Layout>
)

export const pageQuery = graphql`{
  imageLilySpa: file(relativePath: {eq: "images/portfolio-lily_spa.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 600, layout: CONSTRAINED)
    }
  }
  imageWhereWorld: file(relativePath: {eq: "images/portfolio-where_world.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 600, layout: CONSTRAINED)
    }
  }
  imagePicturePalette: file(
    relativePath: {eq: "images/portfolio-picture_palette2.jpg"}
  ) {
    childImageSharp {
      gatsbyImageData(width: 600, layout: CONSTRAINED)
    }
  }
  imageJban: file(relativePath: {eq: "images/portfolio-jban.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 600, layout: CONSTRAINED)
    }
  }
  imageDrumMachine: file(relativePath: {eq: "images/portfolio-drum_machine.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 600, layout: CONSTRAINED)
    }
  }
  imageBookmark: file(relativePath: {eq: "images/portfolio-bookmark.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 600, layout: CONSTRAINED)
    }
  }
  imageFoodFight: file(relativePath: {eq: "images/portfolio-food_fight.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 600, layout: CONSTRAINED)
    }
  }
  imagePomodoroClock: file(
    relativePath: {eq: "images/portfolio-pomodoro_clock.jpg"}
  ) {
    childImageSharp {
      gatsbyImageData(width: 600, layout: CONSTRAINED)
    }
  }
  imageMovieDb: file(relativePath: {eq: "images/portfolio-moviedb.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 600, layout: CONSTRAINED)
    }
  }
  imageMomentumCenter: file(
    relativePath: {eq: "images/portfolio-momentum_center.jpg"}
  ) {
    childImageSharp {
      gatsbyImageData(width: 600, layout: CONSTRAINED)
    }
  }
}
`;

export default Portfolio; 