import React from "react"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"

interface Props {
  tags: Array<string>
}

export default function PostTags({ tags }: Props) {
  const Tags = tags.map((tag: string, index: any) => (
    <li key={index}>
      <Link to={`/blog/tags/${kebabCase(tag)}/`} className="underline">
        {tag}
      </Link>
    </li>
  ))

  return (
    <div className="flex flex-row text-sm text-gray-500 mb-5">
      {tags.length > 0 ? <p>Tagged:</p> : ""}
      <ul className="pl-2 flex flex-row gap-5">{Tags}</ul>
    </div>
  )
}
