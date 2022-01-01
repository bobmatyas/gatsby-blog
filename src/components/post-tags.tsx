import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import kebabCase from "lodash/kebabCase"

const TagHolder = styled.div`
  color: #757575;
  font-family: var(--system-fonts);
  font-size: 90%;
  font-weight: 400;
  margin: 0;
  padding: 0;

  a {
    color: var(--purple-color);
  }

  p {
    margin: 0;
  }

  @media (min-width: 500px) {
    align-items: flex-start;
    display: flex;
    justify-content: top;
    flex-wrap: wrap;
  }
`

const TagList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media (min-width: 500px) {
    display: flex;
    flex-wrap: wrap;
  }
`

const TagItem = styled.li`
  @media (min-width: 500px) {
    margin-left: 10px;
  }
`
interface Props {
  tags: Array<string>
}

export default function PostTags({ tags }: Props) {
  const Tags = tags.map((tag: string, index: any) => (
    <TagItem key={index}>
      <Link to={`/blog/tags/${kebabCase(tag)}/`}>{tag}</Link>
    </TagItem>
  ))

  return (
    <TagHolder>
      {tags.length > 0 ? <p>Tagged:</p> : ""}
      <TagList>{Tags}</TagList>
    </TagHolder>
  )
}
