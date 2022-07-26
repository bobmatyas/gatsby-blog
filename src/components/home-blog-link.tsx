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
  <Post className="h-entry">
    <Link to={props.link} className="u-uid u-url">
      <span className="dt-published">{props.date}</span>:{" "}
      <span className="p-name">{props.title}</span>
    </Link>
  </Post>
)

export default BlogLink
