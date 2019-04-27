import React from "react"

import Layout from "../components/Layout"
import Type from "../components/Type"
import SEO from "../components/Seo"

import configType from "../config/dressing"

const DressingPage = () => (
  <Layout>
    <SEO title="Dressing sur mesure - Menuisier Guadeloupe" />
    <Type {...configType} />
  </Layout>
)

export default DressingPage
