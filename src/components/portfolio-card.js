import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";


const styles = {
  maxWidth: '400px',
  opacity: '0.95'
}

function ListItem(props) {
  return <li className="projects__card__technologies__list__item">{props.value}</li>;
}

function ParagraphItem(props) {
  return <p className="projects__card__description">{props.value}</p>;
}

const Projects = (props) => (

  
  <div className="projects__card">
    <div className="projects__card__image">
      <GatsbyImage image={props.screenshot} style={styles} alt={props.title} />
    </div>

    <h4 className="projects__card__heading">
      {props.title}
    </h4>

    <div className="projects__card__view">

      <div className="projects__card__view__inner">
        <div className="projects__card__view__inner__title">
          View:
        </div> 
        <div className="projects__card__view__links">
          {props.viewOnline ? <a href={props.viewOnline} target="_blank" rel="noopener noreferrer">Online</a> : "" } {props.viewCode ? <a href={props.viewCode}>Code</a> : ""}
        </div>

        { !props.viewOnline && !props.viewCode ? <div className="projects__card__view__links">Internal Project</div> : "" }
      </div>

    </div>


      {props.description.map((paragraph, index) =>
        <ParagraphItem key={index}
          value={paragraph} 
        />
      )}

    <h5 className="projects__card__technologies">
      <span className="projects__card__technologies__inner">Technologies</span>
    </h5>
    <ul className="projects__card__technologies__list">
      {props.technologies.map((technology, index) =>
        <ListItem key={index}
          value={technology} 
          />
      )}
    </ul>
  </div>
)

export default Projects; 