import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import HcardSocial from "./hcard-social"

const Box = styled.div`
  border: 1px solid #eee;
  border-radius: 5px;
  margin: 25px 0 50px 0;
  padding: 5px 25px 10px;
  -webkit-box-shadow: 0px 5px 10px 0px rgba(180, 180, 180, 0.35);
  -moz-box-shadow: 0px 5px 10px 0px rgba(180, 180, 180, 0.35);
  box-shadow: 0px 5px 10px 0px rgba(180, 180, 180, 0.35);
  border-top: 4px solid var(--pink-color);

  p {
    text-align: justify;
  }

  a:link,
  a:visited {
    color: #00614f;
    text-decoration: underline;
  }

  a:hover,
  a:active {
    color: #00614f;
    text-decoration: none;
  }
`

const Grid = styled.div`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    padding-top: 25px;

    h2 {
      text-align: center;
    }
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 200px;
    grid-gap: 50px;
    align-content: center;
    padding-top: 0;
  }

  div {
    align-self: center;
  }
`

const Hcard = () => (
  <Box>
    <Grid className="h-card">
      <div>
        <h2>
          About <span className="p-name">Bob Matyas</span>{" "}
        </h2>

        <p className="p-note">
          I'm a web developer living in Grand Rapids, Michigan. I make designs
          come to life using HTML, CSS, and JavaScript.
        </p>

        <HcardSocial />
      </div>
      <div>
        <StaticImage
          src="../images/flower-logo.jpg"
          alt="Flower"
          imgClassName="u-photo"
          className="hcard__photo"
        />
      </div>
    </Grid>
  </Box>
)

export default Hcard
