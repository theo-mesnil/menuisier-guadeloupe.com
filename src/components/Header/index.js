import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import colors from "../../config/colors"

import SvgIcon from "../Icons/svgWood"
import SvgMail from "../Icons/svgMail"

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

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

const Contact = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.grey};
  width: 35px;
  height: 35px;
  border-radius: 35px;
  transition: background 300ms;

  svg {
    width: 25px;
    height: 25px;

    path {
      fill: ${colors.white};
    }
  }

  &:hover {
    background: ${colors.green};
  }
`

const Header = () => (
  <Wrapper>
    <Logo to="/">
      <Svg>
        <SvgIcon />
      </Svg>
      <Title>
        <strong>Jean-Bernard MESNIL</strong>
        <br />
        Menuisier en Guadeloupe
      </Title>
    </Logo>
    <Contact to="/contact" title="Me contacter">
      <SvgMail />
    </Contact>
  </Wrapper>
)

export default Header
