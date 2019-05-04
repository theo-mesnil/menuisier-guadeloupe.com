// import { Map, Marker, Popup, ZoomControl } from "react-leaflet"
import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"

import Button from "../components/Button"
import Map from "../components/Map"
import SvgMail from "../components/Icons/svgMail"
import SvgContactPhone from "../components/Icons/svgContactPhone"

import colors from "../config/colors"

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Block = styled.div`
  flex: 1 1 100%;

  @media (max-width: 767px) {
    &:first-child {
      margin-bottom: 20px;
    }
  }

  @media (min-width: 768px) {
    flex: 1 1 50%;
  }
`

const SubTitle = styled.h4`
  margin: 0 0 20px;
  font-size: 18px;
  color: ${colors.white};
`

const MapWrapper = styled.div`
  position: relative;

  .leaflet-container {
    height: 350px;
    width: 100%;
  }
`

const Phone = styled.span`
  svg {
    width: 30px;
    height: 30px;

    path {
      fill: ${colors.greyLight};
    }
  }
`

const Section = styled.p`
  margin-bottom: 15px;
`

const coords = [16.274214, -61.263401]

const IndexPage = () => {
  return (
    <Layout title="Me contacter" seoTitle="Contact - Demande de devis">
      <Wrapper>
        <Block>
          <SubTitle>Coordonnées</SubTitle>
          <Section>
            Jean-Bernard MESNIL
            <br />
            <a
              href="https://www.google.com/maps/place/16%C2%B016'27.2%22N+61%C2%B015'48.3%22W/@16.2740934,-61.2651623,1015m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d16.2742222!4d-61.2634167"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chemin de la baie palmiste
            </a>
            <br />
            97118 Saint-François
            <br />
            Guadeloupe
          </Section>
          <Section>
            <Phone>
              <SvgContactPhone />
            </Phone>
            <br />
            06 90 63 84 83
            <br />
            Fax : 09 72 19 75 59
          </Section>
          <Section>
            <a href="mailto:jb@menuisier-guadeloupe.com">
              jb@menuisier-guadeloupe.com
            </a>
            <br />
            <br />
            <Button
              href="mailto:jb@menuisier-guadeloupe.com"
              icon={<SvgMail />}
            >
              M'envoyer un email
            </Button>
          </Section>
        </Block>
        <Block>
          <SubTitle>Localisation</SubTitle>
          <MapWrapper>
            <Map coords={coords} height={350} />
          </MapWrapper>
        </Block>
      </Wrapper>
    </Layout>
  )
}

export default IndexPage
