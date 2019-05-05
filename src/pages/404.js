import React from "react"

import Button from "../components/Button"
import Description from "../components/Description"
import Layout from "../components/Layout"

const ErrorPage = () => (
  <Layout title="Oups!">
    <Description>Désolé, cette page n'est pas disponible :)</Description>
    <br />
    <Button to="/">Retourner à l'accueil</Button>
  </Layout>
)

export default ErrorPage
