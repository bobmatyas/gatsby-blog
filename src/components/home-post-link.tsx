import React from "react"
import { Link } from "gatsby"

interface Props {
  link: string
  date: string
  title: string
}

const BlogLink: React.FC<Props> = (props: Props) => (
  <li className="py-10 border-t-2 border-gray-100 m-0 h-entry">
    <Link to={props.link} className="u-uid u-url block hover:text-underline">
      <span className="dt-published font-sans text-lg font-bold">
        {props.date}:
      </span>
      <br />{" "}
      <span className="p-name font-sans text-3xl font-extrabold hover:text-underline">
        {props.title}
      </span>
    </Link>
  </li>
)

export default BlogLink
