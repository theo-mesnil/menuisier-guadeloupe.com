import React from "react"

import Layout from "../components/Layout"
import Type from "../components/Type"
import SEO from "../components/Seo"

import configType from "../config/bureau"

const BureauPage = () => (
  <Layout>
    <SEO title="Bureau sur mesure, étagère - Menuisier Guadeloupe" />
    <Type {...configType} />
  </Layout>
)

export default BureauPage
