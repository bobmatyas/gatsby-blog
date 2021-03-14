import React from "react"
import { Link } from 'gatsby'
import styled from 'styled-components'

const Post = styled.h3`
`;


const BlogLink = (props) => (
      <Post>
        <Link to={props.link}>
            {props.date}: {props.title}
        </Link>
      </Post>
)

export default BlogLink;