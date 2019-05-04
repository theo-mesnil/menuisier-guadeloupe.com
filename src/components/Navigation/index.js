import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import colors from "../../config/colors"

const List = styled.ul`
  font-family: "Playfair Display", serif;
  list-style-type: none;
  padding: 0;
`

const Item = styled.li`
  padding-bottom: 5px;
`

const ItemLink = styled(Link)`
  color: ${colors.red};
  font-size: 30px;
  text-decoration: none;
  transition: margin-left 200ms cubic-bezier(0.39, 0.58, 0.57, 1), color 400ms;

  &:hover {
    margin-left: 10px;
    color: ${colors.yellow};
  }

  @media (min-width: 768px) {
    font-size: 40px;
  }
`

const Navigation = ({ handleNavigationHovered }) => (
  <List>
    <Item>
      <ItemLink to="/meuble-sur-mesure-guadeloupe">Meuble</ItemLink>
    </Item>
    <Item>
      <ItemLink to="/dressing-sur-mesure-guadeloupe">Dressing</ItemLink>
    </Item>
    <Item>
      <ItemLink to="/bureau-sur-mesure-guadeloupe">Bureau</ItemLink>
    </Item>
    <Item>
      <ItemLink to="/espace-entreprise-sur-mesure-guadeloupe">
        Espace entreprise
      </ItemLink>
    </Item>
  </List>
)

export default Navigation
