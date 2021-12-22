import React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import styled from "styled-components"

const Card = styled.div`
  font-family: var(--system-fonts);
  background-color: #fff;
  border: 1px solid #eee;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  margin: 0 0 50px 0;
  max-width: 375px;
  -webkit-box-shadow: -1px 3px 14px -6px rgba(120, 111, 120, 0.48);
  -moz-box-shadow: -1px 3px 14px -6px rgba(120, 111, 120, 0.48);
  box-shadow: -1px 3px 14px -6px rgba(120, 111, 120, 0.48);

  @media screen and (max-width: 719px) {
    max-width: 400px;
  }
`

const CardHeading = styled.h4`
  font-family: var(--system-fonts);
  background-color: rgba(75, 68, 83, 0.95);
  color: #fff;
  font-weight: 500;
  text-transform: uppercase;
  padding: 15px;
  font-size: 1.2rem;
  margin: 0;
`

const CardDescription = styled.p`
  line-height: 1.5;
  padding-left: 25px;
  padding-right: 25px;
  text-align: justify;
`

const CardView = styled.div`
  align-items: center;
  display: flex;
  font-weight: 600;
  padding: 5px 15px;
  border-bottom: 1px solid #eee;
  margin: 0 0 25px 0;
  padding: 10px 15px;

  a:link,
  a:visited {
    font-weight: 400;
    text-decoration: underline;
  }

  a:hover,
  a:active {
    font-weight: 400;
    text-decoration: none;
  }

  a:link:last-of-type {
    margin-left: 15px;
  }
`

const CardViewInner = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
  width: 100%;
`

const CardTechnologies = styled.h5`
  align-items: center;
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
  display: flex;
  font-family: var(--system-fonts);
  margin: 25px 0 0 0;
  padding: 10px 15px;
`

const CardTechnologiesInner = styled.span`
  margin-left: 10px;
`

const CardTechnologiesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 20px 23px;
  padding: 0;
`

const CardTechnologiesListItem = styled.li`
  background-color: #eee;
  border-radius: 5px;
  font-size: 0.8rem;
  margin: 5px;
  padding: 2px 10px;
`

const styles = {
  maxWidth: "400px",
  opacity: "0.95",
}

interface Props {
  screenshot: IGatsbyImageData
  title: string
  viewOnline?: string
  viewCode?: string
  description: string[]
  technologies: string[]
}

interface Technologies {
  value: string
}

interface Description {
  value: string
}

function ListItem(props: Technologies) {
  return <CardTechnologiesListItem>{props.value}</CardTechnologiesListItem>
}

function ParagraphItem(props: Description) {
  return <CardDescription>{props.value}</CardDescription>
}

const Projects: React.FC<Props> = (props: Props) => (
  <Card>
    <div className="projects__card__image">
      <GatsbyImage image={props.screenshot} style={styles} alt={props.title} />
    </div>

    <CardHeading>{props.title}</CardHeading>

    <CardView>
      <CardViewInner>
        <div className="projects__card__view__inner__title">View:</div>
        <div className="projects__card__view__links">
          {props.viewOnline ? (
            <a
              href={props.viewOnline}
              target="_blank"
              rel="noopener noreferrer"
            >
              Online
            </a>
          ) : (
            ""
          )}{" "}
          {props.viewCode ? <a href={props.viewCode}>Code</a> : ""}
        </div>

        {!props.viewOnline && !props.viewCode ? (
          <div className="projects__card__view__links">Internal Project</div>
        ) : (
          ""
        )}
      </CardViewInner>
    </CardView>

    {props.description.map((paragraph: string, index: number) => (
      <ParagraphItem key={index} value={paragraph} />
    ))}

    <CardTechnologies>
      <CardTechnologiesInner>Technologies</CardTechnologiesInner>
    </CardTechnologies>
    <CardTechnologiesList>
      {props.technologies.map((technology, index) => (
        <ListItem key={index} value={technology} />
      ))}
    </CardTechnologiesList>
  </Card>
)

export default Projects
