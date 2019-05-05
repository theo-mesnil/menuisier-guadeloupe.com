import React from "react"
import styled from "styled-components"

import colors from "../../config/colors"
import background from "../../images/wood.jpg"

const Wrapper = styled.div`
  background: url(${background}) center center;
  background-size: cover;
`

const Content = styled.div`
  max-width: 770px;
  margin: 0 auto;
  padding: 25px 20px;

  @media (min-width: 768px) {
    padding: 50px 20px;
  }
`

const H1 = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 30px;
  line-height: 40px;
  color: ${colors.white};

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 50px;
  }
`

const Title = ({ children }) => (
  <Wrapper>
    <Content>
      <H1>{children}</H1>
    </Content>
  </Wrapper>
)

export default Title
