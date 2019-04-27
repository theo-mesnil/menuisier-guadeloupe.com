import React from "react"

import Layout from "../components/Layout"
import Type from "../components/Type"
import SEO from "../components/Seo"

import configType from "../config/meuble"

const MeublesPage = () => (
  <Layout>
    <SEO title="Meuble sur mesure, table à manger, bibliothèque - Menuisier Guadeloupe" />
    <Type {...configType} />
  </Layout>
)

export default MeublesPage
