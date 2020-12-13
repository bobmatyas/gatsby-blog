import React from "react"
import Img from "gatsby-image"


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

export default (props) => (

  
  <div className="projects__card">
    <div className="projects__card__image">
      <Img style={styles}
        fluid={props.screenshot}
        alt={props.title}
      />
    </div>

    <h4 className="projects__card__heading">
      {props.title}
    </h4>

    <div className="projects__card__view">
      <div className="projects__card__view__icon">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="binoculars" className="svg-inline--fa fa-binoculars fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M416 48c0-8.84-7.16-16-16-16h-64c-8.84 0-16 7.16-16 16v48h96V48zM63.91 159.99C61.4 253.84 3.46 274.22 0 404v44c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32V288h32V128H95.84c-17.63 0-31.45 14.37-31.93 31.99zm384.18 0c-.48-17.62-14.3-31.99-31.93-31.99H320v160h32v160c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-44c-3.46-129.78-61.4-150.16-63.91-244.01zM176 32h-64c-8.84 0-16 7.16-16 16v48h96V48c0-8.84-7.16-16-16-16zm48 256h64V128h-64v160z"></path></svg>
      </div>

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
      <div className="projects__card__technologies__icon">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="code" className="svg-inline--fa fa-code fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path></svg>
      </div>
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