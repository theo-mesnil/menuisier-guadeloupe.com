import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import Navigation from "../components/Navigation"

import profilPic from "../images/jb-mesnil-photo.jpeg"

const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const Picture = styled.div`
  flex: 0 0 70px;
  width: 70px;
  height: 70px;
  border-radius: 70px;
  background: url(${profilPic});
  background-size: cover;
  margin-right: 10px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    flex: 0 0 100px;
    width: 100px;
    height: 100px;
    border-radius: 100px;
    margin-right: 20px;
  }
`

const ProjectTitle = styled.h3`
  font-size: 20px;
  margin: 0;
`

const IndexPage = () => (
  <Layout
    title="Travaux bois massif, matériaux composites, médium, stratifié en Guadeloupe"
    seoTitle="Menuisier en Guadeloupe"
  >
    <Presentation>
      <Picture />
      <div>
        Fort d'une expérience de plus de 30 ans dans le métier, je vous propose
        mes services pour la fabrication, réparation, rénovation ou entretien de
        tout élément en bois et sur mesure : showroom, placards, escaliers,
        dressing, portes, bibliothèques, meubles, boutique, étagères, table,
        cuisines, salles de bain, etc. Travail sur mesure et de haute qualité.
        <br />
        <Link to="/contact">N'hésitez pas à me contacter.</Link>
      </div>
    </Presentation>
    <ProjectTitle>Projets</ProjectTitle>
    <Navigation />
  </Layout>
)

export default IndexPage
