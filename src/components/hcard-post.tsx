import React from "react"

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
    <p className="text-sm text-gray-500 mt-5">
      Posted on &nbsp;
      <a className="u-url underline" href={permaLink}>
        <time className="dt-published" dateTime={props.date}>
          {dateFormat(props.date)}
        </time>
      </a>
      &nbsp; by &nbsp;
      <a className="p-author h-card underline" href="https://www.bobmatyas.com">
        Bob Matyas
      </a>
    </p>
  )
}

export default HcardPost
