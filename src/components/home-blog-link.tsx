import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

interface Props {
  link: string
  date: string
  title: string
}

const Post = styled.li`
  margin: 0;
  padding: 0;

  :hover {
    padding: 0;
    text-decoration: none;
  }

  a {
    display: block;
    margin: 0;
    padding: 10px;
  }

  a:link,
  a:visited {
    color: var(--purple-color);
    text-decoration: underline;
  }

  a:hover,
  a:active {
    color: var(--purple-color);
    text-decoration: none;
  }
`

const BlogLink: React.FC<Props> = (props: Props) => (
  <Post>
    <Link to={props.link}>
      {props.date}: {props.title}
    </Link>
  </Post>
)

export default BlogLink
