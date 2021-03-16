import React from "react"
import { Link } from 'gatsby'
import styled from 'styled-components'

const Post = styled.h3`
  font-size: 90%;

  margin: 0;

  a { display: block; }

  a:link, a:visited { 
    color: #00896f;
    padding: 10px;
  }

  a:hover, a:active { 
    background-color: #e7f3f8;
    border-radius: 5px;
    text-decoration: none; }
`;


const BlogLink = (props) => (
      <Post>
        <Link to={props.link}>
            {props.date}: {props.title}
        </Link>
      </Post>
)

export default BlogLink;