import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const ErrorPage = () => (
  <Layout title="Oups!">
    <Link to="/">Retourner à l'accueil</Link>
  </Layout>
)

export default ErrorPage
