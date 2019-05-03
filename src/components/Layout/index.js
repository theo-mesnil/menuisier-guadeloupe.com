/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { Normalize } from "styled-normalize"
import PropTypes from "prop-types"
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

import colors from "../../config/colors"

import Header from "../Header"

const GlobalStyle = createGlobalStyle`
html {
  font-family: 'Hind', sans-serif;
  color: ${colors.grey};
}

img {
  max-width: 100%;
}

a {
  text-decoration: none;
  color: ${colors.black};
  transition: color 300ms;

  &:hover {
    color: ${colors.green};
  }
}
`

const Wrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
`

const Layout = ({ children, siteTitle }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Normalize />
        <GlobalStyle />
        <Wrapper>
          <Header siteTitle={siteTitle} />
          <main>{children}</main>
          {/* <footer>
            jb@menuisier-guadeloupe.com © 2010 / {new Date().getFullYear()}
          </footer> */}
        </Wrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  siteTitle: PropTypes.string,
}

export default Layout
