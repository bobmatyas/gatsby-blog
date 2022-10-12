import React from "react"
import { Link } from "gatsby"

interface Props {
  link: string
  date: string
  title: string
}

const BlogLink: React.FC<Props> = (props: Props) => (
  <article className="py-10 border-t-2 text-purple-500 border-stone-300 m-0 shadow-none h-entry no-underline hover:underline decoration-4 underline-offset-8 leading-loose">
    <h2>
      <Link to={props.link} className="u-uid u-url block">
        <span className="dt-published font-sans text-lg font-extrabold">
          {props.date}:
        </span>
        <br />{" "}
        <span className="p-name font-sans text-3xl font-extrabold">
          {props.title}
        </span>
      </Link>
    </h2>
  </article>
)

export default BlogLink
