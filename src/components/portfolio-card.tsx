import React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

interface Props {
  screenshot: IGatsbyImageData
  title: string
  viewOnline?: string
  viewCode?: string
  description: string[]
  technologies: string[]
}

interface Description {
  value: string
}

function ParagraphItem(props: Description) {
  return <p className="m-5">{props.value}</p>
}

const Projects: React.FC<Props> = (props: Props) => (
  <div className="font-sans shadow-sm border border-red-100">
    <div className="object-cover border-b-1 border-b-slate">
      <GatsbyImage
        image={props.screenshot}
        className="object-cover"
        alt={props.title}
      />
    </div>

    <h4 className="font-sans font-bold text-slate-700 text-lg mt-5 ml-5 mb-0">
      {props.title}
    </h4>

    <div className="mx-5">
      <div className="flex justify-between w-100">
        <div>View:</div>
        <div>
          {props.viewOnline ? (
            <a
              href={props.viewOnline}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              Online
            </a>
          ) : (
            ""
          )}{" "}
          {props.viewCode ? (
            <a
              href={props.viewCode}
              className="ml-2 underline hover:no-underline"
            >
              Code
            </a>
          ) : (
            ""
          )}
        </div>

        {!props.viewOnline && !props.viewCode ? (
          <div className="projects__card__view__links">Internal Project</div>
        ) : (
          ""
        )}
      </div>
    </div>

    {props.description.map((paragraph: string, index: number) => (
      <ParagraphItem key={index} value={paragraph} />
    ))}

    <h5 className="mx-5 font-bold text-slate-700">Technologies</h5>
    <ul className="flex flex-wrap m-5">
      {props.technologies.map((technology, index) => (
        <li
          key={index}
          className="text-xs bg-slate-200 p-2 mr-2 rounded-sm mb-2"
        >
          {technology}
        </li>
      ))}
    </ul>
  </div>
)

export default Projects
