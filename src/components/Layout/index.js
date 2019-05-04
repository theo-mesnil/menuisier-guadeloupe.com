/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import Helmet from "react-helmet"
import { Normalize } from "styled-normalize"
import PropTypes from "prop-types"
import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import Header from "../Header"
import Footer from "../Footer"
import Title from "../Title"
import SEO from "../Seo"

import colors from "../../config/colors"

const GlobalStyle = createGlobalStyle`
html {
  font-family: 'Hind', sans-serif;
  background: ${colors.grey};
  color: ${colors.greyLight};
  line-height: 1.4;
}

img {
  max-width: 100%;
}

a {
  text-decoration: none;
  color: ${colors.yellow};
  transition: color 300ms;

  &:hover {
    color: ${colors.yellowLight};
  }
}

h1, h2, h3, p, ul {
  margin: 0;
  padding: 0;
}
`
const Wrapper = styled.main`
  max-width: 970px;
  margin: 0 auto;
`

const Center = styled.div`
  margin: 10px 10px 0 10px;
  background: ${colors.greyDark};
  box-sizing: border-box;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  overflow: hidden;

  @media (min-width: 768px) {
    margin: 20px 20px 0 20px;
  }
`

const Content = styled.article`
  max-width: 770px;
  margin: 0 auto;
  padding: 25px 20px;

  @media (min-width: 768px) {
    padding: 50px 20px;
  }
`

const Layout = ({ children, title, seoTitle }) => (
  <>
    <Normalize />
    <GlobalStyle />
    <Wrapper>
      <SEO title={seoTitle || title} />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Hind:400,600|Playfair+Display:700"
          rel="stylesheet"
        />
      </Helmet>
      <Center>
        <Header />
        <Title>{title}</Title>
        <Content>{children}</Content>
        <Footer />
      </Center>
    </Wrapper>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  siteTitle: PropTypes.string,
}

export default Layout
