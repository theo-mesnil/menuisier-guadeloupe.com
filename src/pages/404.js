import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const ErrorPage = () => (
  <Layout>
    <SEO title="Oups!" />
    <h1>Oups 404</h1>
    <Link to="/">Back Home</Link>
  </Layout>
)

export default ErrorPage
