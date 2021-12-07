import React from "react"
import styled from "styled-components"


const SkillsHeader = styled.h4`
  border-bottom: 1px solid #eee;
`;

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0 0 25px 0;
  max-width: 800px;
  padding: 0;
`;

const SkillsListItem = styled.li`
  color: #1d1b1b;
  background-color: #F3C5FF;
  border-radius: 5px;
  font-size: 0.8rem;
  margin: 5px;
  padding: 5px 10px;
  text-transform: uppercase;
`;


const Skills = () => (
  <div className="skills">
 
    <h3 className="skills__header">Skills</h3>

    <SkillsHeader>Web Development</SkillsHeader>

    <SkillsList>
      <SkillsListItem>HTML</SkillsListItem>
      <SkillsListItem>CSS</SkillsListItem>
      <SkillsListItem>JavaScript / ES6</SkillsListItem>
      <SkillsListItem>jQuery</SkillsListItem>
      <SkillsListItem>AngularJS</SkillsListItem>
      <SkillsListItem>ReactJS</SkillsListItem>
      <SkillsListItem>SASS</SkillsListItem>
      <SkillsListItem>Git</SkillsListItem>
      <SkillsListItem>MySQL</SkillsListItem>
      <SkillsListItem>PostgreSQL</SkillsListItem>
      <SkillsListItem>PHP</SkillsListItem>
      <SkillsListItem>NodeJS</SkillsListItem>
      <SkillsListItem>Gulp</SkillsListItem>
      <SkillsListItem>Adobe CC</SkillsListItem>
    </SkillsList>
  
    <SkillsHeader>WordPress</SkillsHeader>

    <SkillsList>
      <SkillsListItem>Theme design and development</SkillsListItem> 
      <SkillsListItem>Custom themes</SkillsListItem>
      <SkillsListItem>Security</SkillsListItem>
      <SkillsListItem>Maintenance</SkillsListItem>
      <SkillsListItem>Deployment</SkillsListItem>
      <SkillsListItem>Optimization</SkillsListItem>
    </SkillsList>

    <SkillsHeader>Content Creation</SkillsHeader>
      
    <SkillsList>
      <SkillsListItem>Copy writing</SkillsListItem> 
      <SkillsListItem>Copy editing</SkillsListItem>
      <SkillsListItem>Media strategy</SkillsListItem>
      <SkillsListItem>Press releases</SkillsListItem>
      <SkillsListItem>SEO (Search Engine Optimization)</SkillsListItem>
      <SkillsListItem>Social media</SkillsListItem>
      <SkillsListItem>Blogging</SkillsListItem>
    </SkillsList>

  </div>
)

export default Skills;