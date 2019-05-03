import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Title from "../components/Title"

const ErrorPage = () => (
  <Layout>
    <SEO title="Oups!" />
    <Title>Oups 404</Title>
    <Link to="/">Retourner à l'accueil</Link>
  </Layout>
)

export default ErrorPage
