import React from "react"

import Layout from "../components/Layout"
import Type from "../components/Type"

import configType from "../config/dressing"

const DressingPage = () => (
  <Layout title={`${configType.title} en Guadeloupe`}>
    <Type {...configType} />
  </Layout>
)

export default DressingPage
