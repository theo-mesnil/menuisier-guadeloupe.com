import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import colors from "../../config/colors"

import SvgIcon from "../Icons/svgWood"

const Logo = styled(Link)`
  display: flex;
  align-items: center;
`

const Title = styled.h2`
  font-size: 16px;
  color: ${colors.grey};
  font-weight: normal;
`

const Svg = styled.div`
  display: flex;
  margin-right: 10px;
  font-size: 50px;

  svg path {
    fill: ${colors.grey};
  }
`

const Header = () => (
  <header>
    <Logo to="/">
      <Svg>
        <SvgIcon />
      </Svg>{" "}
      <Title>
        <strong>Jean-Bernard MESNIL</strong>
        <br />
        Menuisier en Guadeloupe
      </Title>
    </Logo>
  </header>
)

export default Header
