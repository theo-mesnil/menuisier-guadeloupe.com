import React from "react"

import bureau_armoire_1 from "../images/bureau-sur-mesure/armoire/1.png"
import bureau_armoire_2 from "../images/bureau-sur-mesure/armoire/2.png"
import bureau_armoire_3 from "../images/bureau-sur-mesure/armoire/3.png"
import bureau_armoire_4 from "../images/bureau-sur-mesure/armoire/4.png"
import bureau_armoire_5 from "../images/bureau-sur-mesure/armoire/5.png"

const description = (
  <div>
    <p>
      Avec une expérience de plus de 30 ans, je vous vous confectionne des{" "}
      <strong>bureaux sur mesure</strong>.
    </p>
    <br />
    <p>
      Le meuble sur-mesure est de plus en plus tendance. Il conjugue de nombreux
      avantages qui peuvent vous inciter à faire ce choix pour aménager votre
      pièce. Que ce soit pour se démarquer ou encore maitriser des choix
      esthétiques, les <strong>meubles sur mesure</strong> sont une véritable
      option qu’il ne faut pas négliger.
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
  title: "Bureau sur mesure, rangement, étagère etc.",
  projects: [
    {
      name: "Agencement bureau, rangement dossierse",
      pictures: [
        bureau_armoire_1,
        bureau_armoire_2,
        bureau_armoire_3,
        bureau_armoire_4,
        bureau_armoire_5,
      ],
      caption: bureau_armoire_5,
    },
  ],
  captions: [bureau_armoire_4, bureau_armoire_1],
}
