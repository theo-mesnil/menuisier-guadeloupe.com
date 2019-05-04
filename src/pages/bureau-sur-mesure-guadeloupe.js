import React from "react"

import Layout from "../components/Layout"
import Type from "../components/Type"

import configType from "../config/bureau"

const BureauPage = () => (
  <Layout title={`${configType.title} en Guadeloupe`}>
    <Type {...configType} />
  </Layout>
)

export default BureauPage
