import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import Button from "../components/Button"
import Layout from "../components/Layout"

import colors from "../config/colors"

const Wrapper = styled.div`
  text-align: center;
`

const List = styled.ul`
  list-style: none;
  margin-bottom: 30px;
  font-size: 20px;
`

const ItemLink = styled(Link)`
  display: inline-block;
  border-radius: 5px;
  margin: 5px 0;
  transition: color 400ms, background 400ms;

  &:hover {
    color: ${colors.white};
  }
`

const PlanDuSitePage = () => (
  <Layout title="Plan du site">
    <Wrapper>
      <nav>
        <List>
          <li>
            <ItemLink to="/">Accueil</ItemLink>
          </li>
          <li>
            <ItemLink to="/meuble-sur-mesure-guadeloupe">Meuble</ItemLink>
          </li>
          <li>
            <ItemLink to="/dressing-sur-mesure-guadeloupe">Dressing</ItemLink>
          </li>
          <li>
            <ItemLink to="/bureau-sur-mesure-guadeloupe">Bureau</ItemLink>
          </li>
          <li>
            <ItemLink to="/espace-entreprise-sur-mesure-guadeloupe">
              Espace entreprise
            </ItemLink>
          </li>
          <li>
            <ItemLink to="/contact">Contact</ItemLink>
          </li>
        </List>
      </nav>
      <Button to="/">Retourner à l'accueil</Button>
    </Wrapper>
  </Layout>
)

export default PlanDuSitePage
