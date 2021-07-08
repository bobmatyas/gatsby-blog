import React from "react"
import { Link } from 'gatsby'
import BikeRider from "../images/bike-rider.svg"
import styled from 'styled-components'

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
      margin: 25px 0;
    }
  }

`;


const HomeBox = (props) => (
  <Box>
      <div>
        <h2>{props.title}</h2>
        <p>{props.content} <Link to="/about/">Learn More</Link></p>
      </div>
      <img src={BikeRider} alt="" />
  </Box>
)

export default HomeBox;