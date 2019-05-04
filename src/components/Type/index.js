import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Button from "../Button"
import Description from "../Description"
import ProjectItem from "../Project"
import Subtitle from "../Subtitle"
import SvgArrowRight from "../Icons/svgArrowRight"

import background from "../../images/background.png"

import * as Caption from "./Caption"
import * as Project from "./Project"

const DescriptionWrapper = styled.div`
  margin-bottom: 30px;
`

const LinkToContact = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

const Type = ({ description, projects, title, captions }) => {
  return (
    <section>
      <DescriptionWrapper>
        <Description>{description}</Description>
      </DescriptionWrapper>
      <Caption.Wrapper>
        <Caption.List>
          {captions.map((caption, index) => (
            <Caption.Item key={`caption-${index}`}>
              <img src={caption} alt={`${title} - aperçu ${index}`} />
            </Caption.Item>
          ))}
        </Caption.List>
      </Caption.Wrapper>
      <Project.Wrapper>
        <Project.Background>
          <img src={background} alt="fond pour le titre" />
        </Project.Background>
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
      </Project.Wrapper>
      <LinkToContact>
        <Button to="/contact" icon={<SvgArrowRight />}>
          Demande de devis & contact
        </Button>
      </LinkToContact>
    </section>
  )
}

Type.propTypes = {
  description: PropTypes.node.isRequired,
  projects: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
}

export default Type
