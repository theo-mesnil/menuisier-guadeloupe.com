import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Description from "../Description"
import ProjectItem from "../Project"
import Subtitle from "../Subtitle"
import Title from "../Title"

import * as Caption from "./Caption"
import * as Project from "./Project"

const TitleWrapper = styled.div`
  margin: 40px 0 20px;

  @media (min-width: 768px) {
    margin: 50px 0 30px;
  }
`

const DescriptionWrapper = styled.div`
  margin-bottom: 30px;
`

const Type = ({ description, projects, title, captions }) => {
  return (
    <section>
      <TitleWrapper>
        <Title>{title} en guadeloupe</Title>
      </TitleWrapper>
      <DescriptionWrapper>
        <Description>{description}</Description>
      </DescriptionWrapper>
      <Caption.Wrapper>
        {/* <CaptionBackground>
          <img src={bg} />
        </CaptionBackground> */}
        <Caption.List>
          {captions.map((caption, index) => (
            <Caption.Item key={`caption-${index}`}>
              <img src={caption} />
            </Caption.Item>
          ))}
        </Caption.List>
      </Caption.Wrapper>
      <div>
        <Subtitle>Projets</Subtitle>
        <Project.List>
          {projects.map((project, index) => (
            <Project.Item key={`project-${index}`}>
              <ProjectItem
                name={project.name}
                pictures={project.pictures}
                caption={project.caption}
              >
                {project.name}
              </ProjectItem>
            </Project.Item>
          ))}
        </Project.List>
      </div>
    </section>
  )
}

Type.propTypes = {
  description: PropTypes.node.isRequired,
  projects: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
}

export default Type
