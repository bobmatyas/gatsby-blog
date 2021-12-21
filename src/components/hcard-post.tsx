import React from "react"
import styled from "styled-components"

const Meta = styled.p`
  color: #757575;
  font-family: var(--system-fonts);
  font-size: 90%;
  font-weight: 400;
  margin: 0 0 25px;
  padding: 0;

  a {
    color: var(--purple-color);
  }
`

interface Props {
  slug: string
  date: string
}

const HcardPost: React.FC<Props> = (props: Props) => {
  const permaLink = `https://www.bobmatyas.com${props.slug}`

  const dateFormat = (dateToFormat: string) => {
    const date = new Date(dateToFormat)
    const options: any = { year: "numeric", month: "long", day: "numeric" }
    return date.toLocaleDateString("en-us", options)
  }

  return (
    <Meta>
      Posted on &nbsp;
      <a className="u-url" href={permaLink}>
        <time className="dt-published" dateTime={props.date}>
          {dateFormat(props.date)}
        </time>
      </a>
      &nbsp; by &nbsp;
      <a className="p-author h-card" href="https://www.bobmatyas.com">
        Bob Matyas
      </a>
    </Meta>
  )
}

export default HcardPost
