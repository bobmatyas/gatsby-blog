import React from "react"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"

interface Props {
  tags: Array<string>
}

export default function PostTags({ tags }: Props) {
  const Tags = tags.map((tag: string, index: any) => (
    <li key={index}>
      <Link
        to={`/blog/tags/${kebabCase(tag)}/`}
        className="p-category bg-slate-600 text-white p-2 uppercase hover:underline text-xs"
      >
        {tag}
      </Link>
    </li>
  ))

  return (
    <div className="flex flex-row">
      {tags.length > 0 ? "" : ""}
      <ul className="flex flex-row gap-5">{Tags}</ul>
    </div>
  )
}
