import React from "react"
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby"

const Box = styled.div`
  border: 1px solid #eee;
  border-radius: 5px;
  margin: 25px 0 50px 0;
  padding: 5px 25px 10px;
  -webkit-box-shadow: 0px 5px 10px 0px rgba(180,180,180,0.35);
  -moz-box-shadow: 0px 5px 10px 0px rgba(180,180,180,0.35);
  box-shadow: 0px 5px 10px 0px rgba(180,180,180,0.35);
  border-top: 4px solid #845EC2;

  p { text-align: justify }
  img { display: none; }

  a:link, a:visited { 
    color: #00614F;
    text-decoration: underline;
  }
  
  a:hover, a:active { 
    color: #00614F;
    text-decoration: none;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 200px;
    grid-gap: 50px;

    img { 
      display: block; 
    }
  }

`;

const Hcard = ( {data }) => (
  <Box>
    {console.log(data)}
  <section className="h-card">

    <h2>About <span className="p-name">Bob Matyas</span> </h2>  

    <p className="p-note">I'm a web developer living in Grand Rapids, Michigan. I like to make designs come to life using a combination of HTML, CSS, and JavaScript.</p>
 
    <StaticImage 
      src="../images/flower-logo.jpg" 
      alt="Flower" 
      imgClassName="u-photo"
      className="hcard__photo"
    />

    <a className="u-url u-uid" href="https://www.bobmatyas.com">BobMatyas.com</a>
    <a className="u-url" rel="me" href="https://github.com/bobmatyas">Bobmatyas on GitHub</a>
    <a className="u-url" rel="me" href="https://codepen.io/bobmatyas">Bobmatyas on CodePen</a>
    <a className="u-url" rel="me" href="https://twitter.com/bobmatyas">Bobmatyas on Twitter</a>
    <a className="u-url" rel="me" href="https://mastodon.social/@bobmatyas">Bobmatyas on Mastodon</a>
    <a className="u-url" rel="me" href="https://www.linkedin.com/in/bob-matyas">Bobmatyas on Linkedin</a>
  </section>
  </Box>
)

export const pageQuery = graphql`{
  imageLogo: file(relativePath: {eq: "images/flower-logo.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 600, layout: CONSTRAINED)
    }
  }
}
`

export default Hcard;

