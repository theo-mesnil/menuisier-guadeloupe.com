import React from "react"

import bar_snack_1 from "../images/espace-entreprise-sur-mesure/bar-snack/1.png"
import bar_snack_2 from "../images/espace-entreprise-sur-mesure/bar-snack/2.png"
import bar_snack_3 from "../images/espace-entreprise-sur-mesure/bar-snack/3.png"
import bar_snack_4 from "../images/espace-entreprise-sur-mesure/bar-snack/4.png"
import bar_snack_5 from "../images/espace-entreprise-sur-mesure/bar-snack/5.png"

const description = (
  <div>
    <p>
      Avec une expérience de plus de 30 ans, je vous vous confectionne des{" "}
      <strong>
        showrooms, bureaux d'entreprise, accueil, espace entreprise etc. sur
        mesure
      </strong>
      .
    </p>
    <br />
    <p>
      Le meuble sur-mesure est de plus en plus tendance. Il conjugue de nombreux
      avantages qui peuvent vous inciter à faire ce choix pour aménager votre
      pièce. Que ce soit pour se démarquer ou encore maitriser des choix
      esthétiques, les <strong>meubles sur mesure</strong> sont une véritable
      option qu’il ne fait pas négliger.
    </p>
    <br />
    <p>
      La <strong>menuiserie sur mesure</strong> est ma spécialité et je
      m'éfforce de créer pour mes clients des meubles adaptés à leur exigences,
      correspondant parfaitement à leur style et leur goût, et surtout
      idéalement adaptés à leur intérieur et leur décoration.
    </p>
  </div>
)

export default {
  description,
  title: "Espace d'entreprise sur mesure, aménagement de showroom",
  projects: [
    {
      name: "Plan snack bar en stratifié et ciel éclairage à LED",
      pictures: [
        bar_snack_1,
        bar_snack_2,
        bar_snack_3,
        bar_snack_4,
        bar_snack_5,
      ],
      caption: bar_snack_1,
    },
  ],
  captions: [bar_snack_4, bar_snack_3],
}
