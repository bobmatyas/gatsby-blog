import React from "react"

interface Props {
  name: string
  description: string
  link?: string
  linkTitle?: string
}

const ProjectCard: React.FC<Props> = (props: Props) => {
  return (
    <article className="projects__card p-4 rounded-md text-sm font-sans shadow-sm border border-red-100">
      <h3 className="m-0 text-sm">{props.name}</h3>
      <p>{props.description}</p>

      {props.link ? (
        <p>
          <a
            className="projects__card__button bg-purple-500 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded"
            href={props.link}
            title={props.linkTitle}
          >
            View
          </a>
        </p>
      ) : (
        ""
      )}
    </article>
  )
}

export default ProjectCard
