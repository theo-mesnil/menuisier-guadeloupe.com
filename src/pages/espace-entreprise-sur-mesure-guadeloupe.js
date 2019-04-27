import React from "react"

import Layout from "../components/Layout"
import Type from "../components/Type"
import SEO from "../components/Seo"

import configType from "../config/entreprise"

const EntreprisePage = () => (
  <Layout>
    <SEO title="Espace d'entreprise sur mesure, aménagement de showroom" />
    <Type {...configType} />
  </Layout>
)

export default EntreprisePage
