import React from "react"
import { Link } from "gatsby"

interface Props {
  link: string
  date: string
  title: string
}

const BlogLink: React.FC<Props> = (props: Props) => (
  <li className="m-0 p-0 hover:p-0 hover:no-underline h-entry">
    <Link
      to={props.link}
      className="block m-0 p-10 text-purple-500 hover:text-purple-500 hover:no-underline u-uid u-url"
    >
      <span className="dt-published">{props.date}</span>:{" "}
      <span className="p-name">{props.title}</span>
    </Link>
  </li>
)

export default BlogLink
