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

import Header from "../Header"

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
        <Header siteTitle={siteTitle} />
        <main>{children}</main>
        <footer>© 2010 / {new Date().getFullYear()}</footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  siteTitle: PropTypes.string,
}

export default Layout
