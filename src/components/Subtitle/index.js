import React from "react"
import styled from "styled-components"

import colors from "../../config/colors"

const H3 = styled.h3`
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  font-size: 20px;
  line-height: 25px;
  color: ${colors.green};
  margin: 0;

  @media (min-width: 768px) {
    font-size: 30px;
    line-height: 35px;
  }
`

const Subtitle = ({ children }) => <H3>{children}</H3>

export default Subtitle
