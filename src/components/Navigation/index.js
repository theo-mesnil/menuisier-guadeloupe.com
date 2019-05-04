import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import colors from "../../config/colors"

const List = styled.ul`
  font-family: "Playfair Display", serif;
  font-size: ${props => (props.isSmall ? "20px" : "30px")};
  line-height: ${props => (props.isSmall ? "25px" : "40px")};
  color: ${colors.yellow};
  text-align: center;

  @media (min-width: 768px) {
    font-size: ${props => (props.isSmall ? "30px" : "50px")};
    line-height: ${props => (props.isSmall ? "40px" : "70px")};
  }
`

const Item = styled.li`
  display: inline;
  list-style: none;

  &:nth-child(n + 2):before {
    content: "-";
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

const Navigation = ({ isSmall }) => (
  <nav>
    <List isSmall={isSmall}>
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
