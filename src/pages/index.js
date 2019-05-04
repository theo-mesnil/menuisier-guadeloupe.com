import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import Button from "../components/Button"
import Layout from "../components/Layout"
import Navigation from "../components/Navigation"
import SvgBill from "../components/Icons/svgBill"
import SvgMarker from "../components/Icons/svgMarker"

import colors from "../config/colors"
import profilPic from "../images/jb-mesnil-photo.jpeg"

const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  text-align: justify;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 50px;
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
  border: 2px solid ${colors.white};

  @media (min-width: 768px) {
    flex: 0 0 100px;
    width: 100px;
    height: 100px;
    border-radius: 100px;
    margin-right: 20px;
    margin-bottom: 0;
  }
`

const ProjectTitle = styled.h3`
  margin-bottom: 10px;
  text-align: center;
  font-size: 20px;
  color: ${colors.white};

  @media (min-width: 768px) {
    margin-bottom: 20px;
    font-size: 25px;
  }
`

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 50px;
  }
`

const SecondButton = styled.div`
  margin-top: 10px;

  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 20px;
  }
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
    <ProjectTitle>Découvrez mes projets</ProjectTitle>
    <Navigation />
    <Buttons>
      <div>
        <Button to="/contact" icon={<SvgMarker />}>
          Localiser l'atelier
        </Button>
      </div>
      <SecondButton>
        <Button to="/contact" icon={<SvgBill />}>
          Demande de devis
        </Button>
      </SecondButton>
    </Buttons>
  </Layout>
)

export default IndexPage
