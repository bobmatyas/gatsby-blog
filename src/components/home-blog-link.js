import React from "react"
import { Link } from 'gatsby'
import styled from 'styled-components'

const Post = styled.li`
  font-size: 95%;
  margin: 0;
  padding: 0;

  :hover {
    background-color: #F1F7F9;
    border-radius: 5px;
    padding: 0;
  }

  a { 
    display: block; 
    margin: 0;
    padding: 10px;
  }

  a:link, a:visited { 
    color: #00614F;
  }

  a:hover, a:active { 
    color: #006653;
    text-decoration: none;
  }

`;


const BlogLink = (props) => (
      <Post>
        <Link to={props.link}>
            {props.date}: {props.title}
        </Link>
      </Post>
)

export default BlogLink;