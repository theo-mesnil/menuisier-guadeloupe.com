import React from "react"
import styled from "styled-components"

import colors from "../../config/colors"

const H1 = styled.h1`
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  font-size: ${props => (props.isSmall ? "20px" : "30px")};
  line-height: ${props => (props.isSmall ? "25px" : "35px")};
  color: ${colors.brown};
  margin: 0;

  @media (min-width: 768px) {
    font-size: ${props => (props.isSmall ? "30px" : "40px")};
    line-height: ${props => (props.isSmall ? "35px" : "45px")};
  }
`

const Title = ({ children, isSmall }) => <H1 isSmall={isSmall}>{children}</H1>

export default Title
