import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import colors from "../../config/colors"

const List = styled.ul`
  font-family: "Playfair Display", serif;
  text-align: center;
  color: ${colors.yellow};
`

const Item = styled.li`
  display: inline;
  list-style: none;
  font-size: 30px;
  line-height: 40px;

  &:nth-child(n + 2):before {
    content: "-";
  }

  @media (min-width: 768px) {
    font-size: 50px;
    line-height: 70px;
  }
`

const ItemLink = styled(Link)`
  border-radius: 5px;
  padding: 0 10px;
  transition: color 400ms, background 400ms;

  ${Item}:hover & {
    background: ${colors.yellow};
    color: ${colors.white};
  }
`

const Navigation = () => (
  <nav>
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
  </nav>
)

export default Navigation
