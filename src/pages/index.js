import React, { PureComponent } from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import Navigation from "../components/Navigation"
import SEO from "../components/Seo"
import Title from "../components/Title"

const TitleWrapper = styled.div`
  margin: 40px 0 20px;

  @media (min-width: 768px) {
    margin: 50px 0 30px;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Menuiserie Guadeloupe" />
    <TitleWrapper>
      <Title isSmall>
        Travaux bois massif, matériaux composites, médium, stratifié.
      </Title>
    </TitleWrapper>
    <Navigation />
  </Layout>
)

export default IndexPage
