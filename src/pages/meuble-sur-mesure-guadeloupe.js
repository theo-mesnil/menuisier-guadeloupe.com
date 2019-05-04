import React from "react"

import Layout from "../components/Layout"
import Type from "../components/Type"

import configType from "../config/meuble"

const MeublesPage = () => (
  <Layout
    title={`${configType.title} en Guadeloupe`}
    seoTitle="Meuble sur mesure, table à manger, bibliothèque en Guadeloupe"
  >
    <Type {...configType} />
  </Layout>
)

export default MeublesPage
