import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import colors from "../../config/colors"

const Wrapper = styled.footer`
  padding: 10px 15px;
  background: ${colors.black};

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 20px;
  }
`

const Item = styled.li`
  display: inline;
  list-style: none;
  margin-right: 10px;
  font-size: 14px;

  &:nth-child(n + 2):before {
    margin-right: 10px;
    content: "/";
  }
`

const ItemLink = styled(Link)`
  color: ${colors.greyLight};
`

const Legals = styled.div`
  margin-top: 5px;
  font-size: 13px;
`

const H2 = styled.h2`
  font-size: 13px;
`

const Footer = () => (
  <Wrapper>
    <nav>
      <ul>
        <Item>
          <ItemLink to="/">Accueil</ItemLink>
        </Item>
        <Item>
          <ItemLink to="/contact">Me contacter</ItemLink>
        </Item>
        <Item>
          <ItemLink to="/plan-du-site">Plan du site</ItemLink>
        </Item>
      </ul>
    </nav>
    <Legals>
      © 2010 - {new Date().getFullYear()} / Tous droits réservés
      <br />
      <H2>Artisan menuisier, d’agencement et bâtiment en Guadeloupe</H2>
    </Legals>
  </Wrapper>
)

export default Footer
