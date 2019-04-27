import React from "react"
import styled from "styled-components"

import SEO from "../components/seo"

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default () => (
  <Container>
    <SEO title="test styled component" />
    <h1>testing page with styled component</h1>
  </Container>
)
