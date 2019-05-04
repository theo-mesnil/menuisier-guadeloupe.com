import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import Button from "../Button"
import SvgWood from "../Icons/svgWood"
import SvgMail from "../Icons/svgMail"

import colors from "../../config/colors"

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.black};
  padding: 10px 15px;

  @media (min-width: 768px) {
    padding: 5px 20px;
  }
`

const Logo = styled(Link)`
  display: flex;
  align-items: center;
`

const Title = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 20px;
  color: ${colors.white};
`

const SubTitle = styled.h3`
  font-size: 16px;
  color: ${colors.greyLight};
  font-weight: normal;
  opacity: 0.8;
`

const Wood = styled.div`
  display: none;
  margin-right: 10px;
  font-size: 65px;
  transition: margin-right 200ms cubic-bezier(0.39, 0.58, 0.57, 1);

  @media (min-width: 460px) {
    display: flex;
  }

  svg path {
    fill: ${colors.white};
  }

  ${Logo}:hover & {
    margin-right: 13px;
  }
`

const Header = () => (
  <Wrapper>
    <Logo to="/">
      <Wood>
        <SvgWood />
      </Wood>
      <div>
        <Title>Jean-Bernard MESNIL</Title>
        <SubTitle>Menuisier en Guadeloupe</SubTitle>
      </div>
    </Logo>
    <Button
      to="/contact"
      icon={<SvgMail />}
      variant="outlined"
      hideTextOnMobile
    >
      Me contacter
    </Button>
  </Wrapper>
)

export default Header
