import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gradient from "../components/gradient"
import UfoImage from '../images/404.svg';

console.log(UfoImage);

export default ({ data }) => (
  <Layout>
    
    <SEO 
      title="404 - Page Not Found"
      description="Page not found"
    />

    <Gradient color="pink" />

    <div className="main__content">
      
      <h2>Page Not Found</h2>

      <div className="four04">

        <p>Oops! The page you are looking for was not found.</p>
 
        <div className="four04__icon">
          <img src={UfoImage} className="four04__icon__image" alt="ufo icon" />
        </div>
        
        <p><a href="https://www.bobmatyas.com">Navigate back to the homepage.</a></p>
  
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