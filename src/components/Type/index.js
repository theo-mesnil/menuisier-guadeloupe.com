import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Button from "../Button"
import Description from "../Description"
import ProjectItem from "../Project"
import SvgBill from "../Icons/svgBill"

import * as Caption from "./Caption"
import * as Project from "./Project"

import background from "../../images/background.png"
import colors from "../../config/colors"

const DescriptionWrapper = styled.div`
  margin-bottom: 30px;
`

const LinkToContact = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

const H4 = styled.h4`
  font-family: "Playfair Display", serif;
  font-size: 25px;
  line-height: 30px;
  color: ${colors.white};
  margin: 0;

  @media (min-width: 768px) {
    font-size: 30px;
    line-height: 35px;
  }
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
        <H4>Projets</H4>
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
        <Button to="/contact" icon={<SvgBill />}>
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
