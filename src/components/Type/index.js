import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Button from "../Button"
import Description from "../Description"
import Navigation from "../Navigation"
import ProjectItem from "../Project"
import SvgBill from "../Icons/svgBill"

import * as Caption from "./Caption"
import * as Project from "./Project"

import colors from "../../config/colors"

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 34px;
  }
`

const LinkToContact = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 30px;

  @media (min-width: 768px) {
    margin: 40px 0 40px;
  }
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
        <Caption.Wrapper>
          <Caption.List>
            {captions.map((caption, index) => (
              <Caption.Item key={`caption-${index}`}>
                <img
                  src={caption}
                  aria-labelledby={`${title} - aperçu ${index}`}
                  alt={`${title} - aperçu ${index}`}
                />
              </Caption.Item>
            ))}
          </Caption.List>
        </Caption.Wrapper>
        <Description>{description}</Description>
      </DescriptionWrapper>
      <Project.Wrapper>
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
      <Navigation isSmall />
    </section>
  )
}

Type.propTypes = {
  description: PropTypes.node.isRequired,
  projects: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
}

export default Type
