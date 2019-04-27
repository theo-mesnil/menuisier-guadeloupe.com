import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Menuiserie Guadeloupe" />
    <h1>Title</h1>
    <Link to="/meuble-sur-mesure-guadeloupe">Meuble</Link>
    <Link to="/dressing-sur-mesure-guadeloupe">Dressing</Link>
    <Link to="/bureau-sur-mesure-guadeloupe">Bureau</Link>
    <Link to="/espace-entreprise-sur-mesure-guadeloupe">Espace entreprise</Link>
  </Layout>
)

export default IndexPage
